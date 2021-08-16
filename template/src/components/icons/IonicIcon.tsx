import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import { FONT_SIZE } from 'constants/styleVariables';
import { IconProps } from 'react-native-vector-icons/Icon';
import { platformIcon } from 'helpers/platformIcon';
import Animated from 'react-native-reanimated';
import { TextStyle } from 'react-native';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

type IonicIconProps = Omit<IconProps, 'sytle'> & {
  outline?: boolean;
  style?: Animated.AnimatedStyleProp<TextStyle>;
};

const IonicIcon: React.FC<IonicIconProps> = ({ name, outline, ...iconProps }) => {
  const {
    colors: { text },
  } = useTheme();

  return (
    <AnimatedIcon
      name={platformIcon(`${name}${outline ? '-outline' : ''}`)}
      color={text}
      size={FONT_SIZE.body_1}
      {...iconProps}
    />
  );
};

export default IonicIcon;
