import { useTheme } from '@react-navigation/native';
import AppText from 'components/general/AppText';
import { styleGuide } from 'constants/styleGuide';
import {
  BORDER_RADIUS,
  COLORS,
  DEFAULT_SPACE,
  INPUT_HEIGHT,
  SHADOWS,
} from 'constants/styleVariables';
import useBounce from 'hooks/useBounce';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';

interface AppButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
  title?: string;
  inverted?: boolean;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  icon?: JSX.Element;
}

const AppButton = ({
  style,
  title,
  inverted,
  textStyle,
  loading = false,
  disabled = false,
  containerStyle,
  icon,
  ...pressableProps
}: AppButtonProps) => {
  const { colors } = useTheme();

  const { style: animatedStyle, onPressIn, onPressOut } = useBounce();

  return (
    <Animated.View style={[animatedStyle, containerStyle]}>
      <Pressable
        {...pressableProps}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled || loading}
        style={[
          styles.defaultContainer,
          icon && styles.iconContainerOverride,
          { backgroundColor: inverted ? colors.white : colors.primary },
          (disabled || loading) && styles.disabledStyle,
          style,
        ]}
      >
        {icon}
        {loading ? (
          <ActivityIndicator
            size={styleGuide.button.fontSize}
            color={inverted ? colors.primary : colors.white}
          />
        ) : (
          title && (
            <AppText
              style={[
                styleGuide.button,
                styles.title,
                icon && styles.iconTitleOverride,
                { color: inverted ? colors.primary : colors.white },
                textStyle,
              ]}
            >
              {title}
            </AppText>
          )
        )}
      </Pressable>
    </Animated.View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  defaultContainer: {
    padding: DEFAULT_SPACE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS.md,
    minHeight: INPUT_HEIGHT,
    ...SHADOWS,
    shadowColor: COLORS.PRIMARY,
  },
  iconContainerOverride: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
  },
  iconTitleOverride: {
    marginHorizontal: DEFAULT_SPACE * 1.3,
  },
  disabledStyle: {
    opacity: 0.7,
  },
});
