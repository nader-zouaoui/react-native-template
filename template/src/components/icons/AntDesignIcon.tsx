import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { IconProps } from 'react-native-vector-icons/Icon';
import { FONT_SIZE } from 'constants/styleVariables';
import { useTheme } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

interface PropTypes extends Omit<IconProps, 'style'> {
  outline?: boolean;
  style?: Animated.AnimateProps<IconProps>['style'];
}

const AntDesignIcon: React.FC<PropTypes> = ({ name, outline, ...iconProps }) => {
  const {
    colors: { text },
  } = useTheme();

  return (
    <AnimatedIcon
      name={`${name}${outline ? 'o' : ''}`}
      size={FONT_SIZE.body_1}
      color={text}
      {...iconProps}
    />
  );
};

export default AntDesignIcon;
