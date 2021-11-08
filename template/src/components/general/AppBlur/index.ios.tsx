import { BlurView, BlurViewProperties } from '@react-native-community/blur';
import React from 'react';

const AppBlur: React.FC<BlurViewProperties> = ({ style, children, ...blurViewProps }) => {
  return (
    <BlurView style={style} {...blurViewProps}>
      {children}
    </BlurView>
  );
};

export default AppBlur;
