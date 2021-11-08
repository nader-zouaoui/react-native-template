import { BlurViewProperties } from '@react-native-community/blur';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const AppBlur: React.FC<BlurViewProperties> = ({ style, children }) => {
  return <View style={[styles.androidBackdrop, style]}>{children}</View>;
};

export default AppBlur;

const styles = StyleSheet.create({
  androidBackdrop: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
