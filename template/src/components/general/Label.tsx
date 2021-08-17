import React from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import AppText from './AppText';
import { useTheme } from '@react-navigation/native';
import { styleGuide } from 'constants/styleGuide';
import { VERTICAL_DEFAULT_SPACE } from 'constants/styleVariables';

type LabelProps = {
  style?: StyleProp<TextStyle>;
  hasError?: boolean;
};

const Label: React.FC<LabelProps> = ({ children, style, hasError }) => {
  const { colors } = useTheme();

  return (
    <AppText
      style={[styleGuide.overline, styles.label, hasError && { color: colors.danger }, style]}
    >
      {children}
    </AppText>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: VERTICAL_DEFAULT_SPACE * 0.5,
  },
});

export default Label;
