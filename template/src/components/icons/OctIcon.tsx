import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import { IconProps } from 'react-native-vector-icons/Icon';
import { useTheme } from '@react-navigation/native';
import { FONT_SIZE } from 'constants/styleVariables';

const OctIcon: React.FC<IconProps> = (iconProps) => {
  const {
    colors: { text },
  } = useTheme();

  return <Icon color={text} size={FONT_SIZE.body_1} {...iconProps} />;
};

export default OctIcon;
