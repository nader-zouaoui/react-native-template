import {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

/**
 * @param intensity : intensity of bounce animation (default : 100)
 * @param minSclae : scale when pressed in (default : 0.9)
 */
const useBounce = (intensity = 100, minScale = 0.9) => {
  const pressingIn = useSharedValue(false);

  const scale = useDerivedValue(() =>
    withSpring(pressingIn.value ? minScale * intensity : 1 * intensity),
  );

  const onPressIn = () => {
    pressingIn.value = true;
  };

  const onPressOut = () => {
    pressingIn.value = false;
  };

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value / intensity }],
    };
  });

  return { style, onPressIn, onPressOut };
};

export default useBounce;
