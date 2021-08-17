import { useTheme } from '@react-navigation/native';
import { styleGuide } from 'constants/styleGuide';

import React from 'react';
import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native';

type LoaderProps = {
  style?: StyleProp<ViewStyle>;
};

const Loader = ({ style }: LoaderProps) => {
  const { colors } = useTheme();

  return (
    <View style={[styleGuide.flex_1, styleGuide.center, style]}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loader;
