import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

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
          translateX.value = withTiming(0, { duration: 0 });
        });
      } else if (
        event.translationX < -65 &&
        currentDayIndex < mockData.length - 1
      ) {
        // Swipe left to go to the next day
        translateX.value = withTiming(-screenWidth, { duration: 300 }, () => {
          runOnJS(setCurrentDayIndex)(currentDayIndex + 1);
          translateX.value = screenWidth; // Reset to off-screen on the right side
          translateX.value = withTiming(0, { duration: 0 });
        });
      } else {
        // If not swiping far enough, reset position
        translateX.value = withTiming(0, { duration: 300 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: opacity.value, // Set opacity for fade effect
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View>
        <Text style={styles.headerText}>{mockData[currentDayIndex].day}</Text>
      </Animated.View>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.container, animatedStyle]}>
          <Text style={styles.text}>{mockData[currentDayIndex].day}</Text>
          <Text style={styles.stats}>{mockData[currentDayIndex].stats}</Text>
          {/* <ChoresPieCharts /> */}
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: '100%',
    backgroundColor: 'lightblue',
  },
  text: { fontSize: 24 },
  stats: { fontSize: 16, textAlign: 'center' },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
  },
});
