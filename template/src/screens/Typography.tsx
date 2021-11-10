import { BUILD_NUMBER, VERSION } from '@env';
import { useNavigation } from '@react-navigation/native';
import AppButton from 'components/general/AppButton';
import AppText from 'components/general/AppText';
import { styleGuide } from 'constants/styleGuide';
import { NavigatorNavigationProp } from 'navigator/Navigator/types';
import React from 'react';
import { ScrollView } from 'react-native';

const Typography = () => {
  const { navigate } = useNavigation<NavigatorNavigationProp>();

  return (
    <ScrollView style={styleGuide.flexGrow_1} contentContainerStyle={styleGuide.p_1}>
      <AppButton title="Navigate" onPress={() => navigate('Components')} />
      <AppText style={styleGuide.overline}>App Version : {VERSION}</AppText>
      <AppText style={styleGuide.overline}>Build N° : {BUILD_NUMBER}</AppText>
      <AppText style={styleGuide.h1}>H1</AppText>
      <AppText style={styleGuide.h2}>H2</AppText>
      <AppText style={styleGuide.h3}>H3</AppText>
      <AppText style={styleGuide.h4}>H4</AppText>
      <AppText style={styleGuide.h5}>H5</AppText>
      <AppText style={styleGuide.h6}>H6</AppText>
      <AppText style={styleGuide.subtitle_1}>Subtitle 1</AppText>
      <AppText style={styleGuide.subtitle_2}>Subtitle 2</AppText>
      <AppText style={styleGuide.body_1}>Body 1</AppText>
      <AppText style={styleGuide.body_2}>Body 2</AppText>
      <AppText style={styleGuide.button}>Button</AppText>
      <AppText style={styleGuide.caption}>Caption</AppText>
      <AppText style={styleGuide.overline}>Overline</AppText>
    </ScrollView>
  );
};

export default Typography;
