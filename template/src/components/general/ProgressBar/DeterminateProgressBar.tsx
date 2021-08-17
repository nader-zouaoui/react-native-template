import { BORDER_RADIUS, COLORS } from 'constants/styleVariables';
import React, { useEffect, useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { clamp } from 'react-native-redash';
import tinycolor from 'tinycolor2';

const HEIGHT = 5;

type DeterminateProgressBarProps = {
  color?: string;
  style?: StyleProp<ViewStyle>;
  progress: number;
  progressStyle?: StyleProp<ViewStyle>;
};
const DeterminateProgressBar = ({
  color = COLORS.PRIMARY,
  style,
  progress,
  progressStyle,
}: DeterminateProgressBarProps) => {
  const { backgroundColor, foregroundColor } = useMemo(() => {
    return {
      backgroundColor: tinycolor(color).lighten(30).toHexString(),
      foregroundColor: color,
    };
  }, [color]);

  const animatedProgress = useSharedValue(0);

  useEffect(() => {
    if (progress > 1 || progress < 0) {
      throw new Error('Invalid range (progress should be between 0 and 1');
    }
    animatedProgress.value = withTiming(progress, { easing: Easing.inOut(Easing.ease) });
  }, [progress, animatedProgress]);

  const progressAinmatedStyle = useAnimatedStyle(() => {
    return {
      width: `${clamp(animatedProgress.value, 0, 1) * 100}%`,
      height: '100%',
      borderRadius: BORDER_RADIUS.sm,
    };
  });

  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <Animated.View
        style={[progressStyle, progressAinmatedStyle, { backgroundColor: foregroundColor }]}
      />
    </View>
  );
};

export default DeterminateProgressBar;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    borderRadius: BORDER_RADIUS.sm,
    overflow: 'hidden',
  },
});
