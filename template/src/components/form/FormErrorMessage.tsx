import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from 'components/general/AppText';
import { DEFAULT_SPACE } from 'constants/styleVariables';
import { useTheme } from '@react-navigation/native';
import { styleGuide } from 'constants/styleGuide';

const FormErrorMessage: React.FC = ({ children }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.errorContainer}>
      <AppText style={[styleGuide.overline, { color: colors.danger }]}>{children}</AppText>
    </View>
  );
};

export default FormErrorMessage;

const styles = StyleSheet.create({
  errorContainer: {
    alignItems: 'flex-end',
    marginVertical: DEFAULT_SPACE / 2,
  },
});
