import { useCallback } from 'react';
import {
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
  useSharedValue,
} from 'react-native-reanimated';

export const useWorkdayAnimation = () => {
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);
  const opacity = useSharedValue(1);

  const cardAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { rotateY: `${rotation.value}deg` },
      ],
      opacity: opacity.value,
    };
  });

  const animateCard = useCallback((isFlipped: boolean) => {
    rotation.value = withSpring(isFlipped ? 180 : 0, {
      damping: 20,
      stiffness: 90,
    });
  }, []);

  const animatePress = useCallback((isPressed: boolean) => {
    scale.value = withSpring(isPressed ? 0.95 : 1, {
      damping: 20,
      stiffness: 200,
    });
  }, []);

  const animateFade = useCallback((isVisible: boolean) => {
    opacity.value = withTiming(isVisible ? 1 : 0, {
      duration: 300,
    });
  }, []);

  return {
    cardAnimatedStyle,
    animateCard,
    animatePress,
    animateFade,
  };
};
