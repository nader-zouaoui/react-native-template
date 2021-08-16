import { StyleSheet } from 'react-native';
import { COLORS, DEFAULT_SPACE, FONT_SIZE, FONT_WEIGHT } from './styleVariables';

export const styleGuide = StyleSheet.create({
  /* TYPOGRAPHY START */
  h1: {
    fontSize: FONT_SIZE.h1,
    fontWeight: FONT_WEIGHT.light,
    letterSpacing: -1.5,
    fontFamily: 'Lato',
  },
  h2: {
    fontSize: FONT_SIZE.h2,
    fontWeight: FONT_WEIGHT.light,
    letterSpacing: -0.5,
    fontFamily: 'Lato',
  },
  h3: {
    fontSize: FONT_SIZE.h3,
    fontWeight: FONT_WEIGHT.regular,
    letterSpacing: 0,
    fontFamily: 'Lato',
  },
  h4: {
    fontSize: FONT_SIZE.h4,
    fontWeight: FONT_WEIGHT.regular,
    letterSpacing: 0.25,
    fontFamily: 'Lato',
  },
  h5: {
    fontSize: FONT_SIZE.h5,
    fontWeight: FONT_WEIGHT.regular,
    letterSpacing: 0,
    fontFamily: 'Lato',
  },
  h6: {
    fontSize: FONT_SIZE.h6,
    fontWeight: FONT_WEIGHT.semiBold,
    letterSpacing: 0.15,
    fontFamily: 'Lato',
  },
  subtitle_1: {
    fontSize: FONT_SIZE.subtitle_1,
    fontWeight: FONT_WEIGHT.regular,
    letterSpacing: 0.15,
    fontFamily: 'Lato',
  },
  subtitle_2: {
    fontSize: FONT_SIZE.subtitle_2,
    fontWeight: FONT_WEIGHT.semiBold,
    letterSpacing: 0.1,
    fontFamily: 'Lato',
  },
  body_1: {
    fontSize: FONT_SIZE.body_1,
    fontWeight: FONT_WEIGHT.semiBold,
    letterSpacing: 0.5,
  },
  body_2: {
    fontSize: FONT_SIZE.body_2,
    fontWeight: FONT_WEIGHT.semiBold,
    letterSpacing: 0.25,
  },
  button: {
    fontSize: FONT_SIZE.button,
    fontWeight: FONT_WEIGHT.semiBold,
    letterSpacing: 1.25,
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: FONT_SIZE.caption,
    fontWeight: FONT_WEIGHT.semiBold,
    letterSpacing: 0.4,
  },
  overline: {
    fontSize: FONT_SIZE.overline,
    fontWeight: FONT_WEIGHT.semiBold,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  /* TYPOGRAPHY END  | LAYOUT START */
  flex_1: {
    flex: 1,
  },
  flexGrow_1: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  p1: {
    padding: DEFAULT_SPACE,
  },
  m1: {
    margin: DEFAULT_SPACE,
  },
  textPrimary: {
    color: COLORS.PRIMARY,
  },
  textSecondary: {
    color: COLORS.SECONDARY,
  },
  selfCenter: {
    alignSelf: 'center',
  },
});
