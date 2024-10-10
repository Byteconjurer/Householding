import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const SwipeableView = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const translateX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: (event) => {
      if (event.translationX > 50) {
        translateX.value = withSpring(0);
        setCurrentDay((prev) => prev - 1);
      } else if (event.translationX < -50) {
        translateX.value = withSpring(0);
        setCurrentDay((prev) => prev + 1);
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateX: translateX.value }] },
        ]}
      >
        <Text style={styles.text}>Day: {currentDay}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default SwipeableView;
