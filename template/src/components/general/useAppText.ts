import { useMemo } from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import getFontFamily, { AppFonts } from 'helpers/getFontFamily';
import { useTheme } from '@react-navigation/native';
import { styleGuide } from 'constants/styleGuide';

export const useAppText = (style: StyleProp<TextStyle>) => {
  const { colors } = useTheme();

  const { fontFamily, fontWeight, ...styleRest } = useMemo(
    () => StyleSheet.flatten(style || {}),
    [style],
  );

  const textStyles = useMemo(
    () =>
      StyleSheet.create({
        text: {
          ...styleGuide.body_1,
          fontWeight: undefined,
          color: colors.text,
          fontFamily: getFontFamily(fontFamily as AppFonts, { fontWeight }),
          lineHeight: (styleRest.fontSize || styleGuide.body_1.fontSize) * 1.4,
        },
      }),
    [colors.text, fontFamily, fontWeight, styleRest.fontSize],
  );

  return { textStyles, styleRest };
};
