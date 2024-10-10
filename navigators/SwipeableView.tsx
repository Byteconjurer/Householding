import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
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
          <View></View>
          <Text style={styles.text}>{mockData[currentDayIndex].day}</Text>
          <Text style={styles.stats}>{mockData[currentDayIndex].stats}</Text>
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

//
//
//
//
////
//
//
//
////
//
//
//
//

// import React, { useRef, useState } from 'react';
// import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';

// const SwipeableView = () => {
//   const [currentDay, setCurrentDay] = useState(0);
//   const translateX = useRef(new Animated.Value(0)).current;

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderMove: (event, gestureState) => {
//         translateX.setValue(gestureState.dx);
//       },
//       onPanResponderRelease: (event, gestureState) => {
//         if (gestureState.dx > 50) {
//           Animated.spring(translateX, {
//             toValue: 0,
//             useNativeDriver: true,
//           }).start(() => {
//             setCurrentDay((prev) => prev - 1);
//           });
//         } else if (gestureState.dx < -50) {
//           Animated.spring(translateX, {
//             toValue: 0,
//             useNativeDriver: true,
//           }).start(() => {
//             setCurrentDay((prev) => prev + 1);
//           });
//         } else {
//           Animated.spring(translateX, {
//             toValue: 0,
//             useNativeDriver: true,
//           }).start();
//         }
//       },
//     }),
//   ).current;

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[styles.swipeableView, { transform: [{ translateX }] }]}
//         {...panResponder.panHandlers}
//       >
//         <Text style={styles.text}>Day: {currentDay}</Text>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   swipeableView: {
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//   },
// });

// export default SwipeableView;

//
//
//
//
////
//
//
//
////
//
//
//
////
//
//
//
////
//
//
//
//

// import React, { useState } from 'react';
// import { StyleSheet, Text } from 'react-native';
// import { Gesture, GestureDetector } from 'react-native-gesture-handler';
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
// } from 'react-native-reanimated';

// const SwipeableView = () => {
//   const [currentDay, setCurrentDay] = useState(0);
//   const translateX = useSharedValue(0);

//   const panGesture = Gesture.Pan()
//     .onStart((ctx) => {
//       ctx.translationX = translateX.value;
//     })
//     .onUpdate((ctx) => {
//       translateX.value = ctx.translationX + ctx.translationX;
//     })
//     .onEnd((event) => {
//       if (event.translationX > 50) {
//         translateX.value = withSpring(0);
//         setCurrentDay((prev) => prev - 1);
//       } else if (event.translationX < -50) {
//         translateX.value = withSpring(0);
//         setCurrentDay((prev) => prev + 1);
//       } else {
//         translateX.value = withSpring(0);
//       }
//     });

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateX: translateX.value }],
//     };
//   });

//   return (
//     <GestureDetector gesture={panGesture}>
//       <Animated.View style={[styles.container, animatedStyle]}>
//         <Text style={styles.text}>Day: {currentDay}</Text>
//       </Animated.View>
//     </GestureDetector>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//   },
// });

// export default SwipeableView;
