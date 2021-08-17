import {BlurView, BlurViewProperties} from '@react-native-community/blur';
import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';

const AppBlur: React.FC<BlurViewProperties> = ({
  style,
  children,
  ...blurViewProps
}) => {
  if (Platform.OS === 'ios')
    return (
      <BlurView style={style} {...blurViewProps}>
        {children}
      </BlurView>
    );

  return <View style={[styles.androidBackdrop, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  androidBackdrop: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});

export default AppBlur;
