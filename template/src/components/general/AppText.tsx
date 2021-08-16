import React from 'react';
import { Text, TextProps } from 'react-native';
import { useAppText } from './useAppText';

const AppText: React.FC<TextProps> = ({ children, style, ...props }) => {
  const { textStyles, styleRest } = useAppText(style);

  return (
    <Text style={[textStyles.text, styleRest]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
