import AppText from 'components/general/AppText';
import { styleGuide } from 'constants/styleGuide';
import React from 'react';
import { View } from 'react-native';

const OtherScreen = () => {
  return (
    <View style={[styleGuide.flex_1, styleGuide.center]}>
      <AppText style={styleGuide.h3}>Other screen</AppText>
    </View>
  );
};

export default OtherScreen;
