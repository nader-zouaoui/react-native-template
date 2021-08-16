import React from 'react';
import Icon, { FontAwesome5IconProps } from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@react-navigation/native';
import { FONT_SIZE } from 'constants/styleVariables';

const FontAwesomeIcon: React.FC<FontAwesome5IconProps> = (iconProps) => {
  const {
    colors: { text },
  } = useTheme();

  return <Icon color={text} size={FONT_SIZE.body_1} {...iconProps} />;
};

export default FontAwesomeIcon;
