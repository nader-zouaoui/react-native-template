import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconProps } from 'react-native-vector-icons/Icon';
import { FONT_SIZE } from 'constants/styleVariables';
import { useTheme } from '@react-navigation/native';

interface PropTypes extends IconProps {
  outline?: boolean;
}

const MaterialIcon: React.FC<PropTypes> = ({ name, outline, ...iconProps }) => {
  const {
    colors: { text },
  } = useTheme();

  return (
    <Icon
      name={`${name}${outline ? '-outline' : ''}`}
      color={text}
      size={FONT_SIZE.body_1}
      {...iconProps}
    />
  );
};

export default MaterialIcon;
