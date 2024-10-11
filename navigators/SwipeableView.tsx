import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ChoresPieCharts from '../components/mockedPieCharts';

const screenWidth = Dimensions.get('window').width;

// Bruksanvisning för SwipeableView:
// Swipea åt det håll du vill, om du swipar mer än 65px åt höger så går du till föregående dag,
// om du swipar mer än 65px åt vänster så går du till nästa dag.
// Om du inte swipar mer än 50px så återgår du till ursprungsläget.
//
// LÄGGA TILL SAKER:
// Byt ut mockData med riktig data
// Byt ut texten i Text-komponenterna med riktig data
// Lägg till Views för att visa mer data

const mockData = [
  { day: 'Yesterday', stats: 'Stats for yesterday...' },
  { day: 'Today', stats: 'Stats for today...' },
  { day: 'Tomorrow', stats: 'Stats for tomorrow...' },
];

export default function SwipeableView() {
  const [currentDayIndex, setCurrentDayIndex] = useState(1); // Start with "Today"
  const translateX = useSharedValue(0); // useSharedValue is used to drive animations and its purpose is to share a value between JS and the native thread
  const opacity = useSharedValue(1);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      translateX.value = 0; // Reset position
      opacity.value = 1; // Reset opacity
    })
    .onUpdate((event) => {
      translateX.value = event.translationX; // Move the view with swipe
    })
    .onEnd((event) => {
      if (event.translationX > 65 && currentDayIndex > 0) {
        // Swipe right to go to the previous day
        translateX.value = withTiming(screenWidth, { duration: 300 }, () => {
          runOnJS(setCurrentDayIndex)(currentDayIndex - 1);
          translateX.value = -screenWidth; // Reset to off-screen on the left side
          translateX.value = withTiming(0, { duration: 300 });
        });
      } else if (
        event.translationX < -65 &&
        currentDayIndex < mockData.length - 1
      ) {
        // Swipe left to go to the next day
        translateX.value = withTiming(-screenWidth, { duration: 300 }, () => {
          runOnJS(setCurrentDayIndex)(currentDayIndex + 1);
          translateX.value = screenWidth; // Reset to off-screen on the right side
          translateX.value = withTiming(0, { duration: 300 });
        });
      } else {
        // If not swiping far enough, reset position
        translateX.value = withTiming(0, { duration: 300 });
      }
    });

  const handleLeftPress = () => {
    if (currentDayIndex > 0) {
      translateX.value = withTiming(screenWidth, { duration: 300 }, () => {
        runOnJS(setCurrentDayIndex)(currentDayIndex - 1);
        translateX.value = -screenWidth;
        translateX.value = withTiming(0, { duration: 300 });
      });
    }
  };

  const handleRightPress = () => {
    if (currentDayIndex < mockData.length - 1) {
      translateX.value = withTiming(-screenWidth, { duration: 300 }, () => {
        runOnJS(setCurrentDayIndex)(currentDayIndex + 1);
        translateX.value = screenWidth;
        translateX.value = withTiming(0, { duration: 300 });
      });
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: opacity.value, // Set opacity for fade effect
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={styles.headerContainer}>
        <IconButton icon="chevron-left" size={30} onPress={handleLeftPress} />
        <Text style={styles.headerText}>{mockData[currentDayIndex].day}</Text>
        <IconButton icon="chevron-right" size={30} onPress={handleRightPress} />
      </Animated.View>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.container, animatedStyle]}>
          <Text style={styles.stats}>{mockData[currentDayIndex].stats}</Text>
          <ChoresPieCharts />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Space out the buttons and text
    backgroundColor: 'white',
    height: 40,
  },
  stats: { fontSize: 16, textAlign: 'center', paddingTop: 10 },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
