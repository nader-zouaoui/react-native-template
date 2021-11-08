/* eslint-disable max-lines */
import { StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  COLORS,
  DEFAULT_SPACE,
  FONT_SIZE,
  FONT_WEIGHT,
  SHADOWS,
} from './styleVariables';

export const styleGuide = StyleSheet.create({
  // Typography
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
  // Layout
  flex_1: {
    flex: 1,
  },
  flexGrow_1: {
    flexGrow: 1,
  },
  flexGrow_0: {
    flexGrow: 0,
  },
  flexShrink_1: {
    flexShrink: 1,
  },
  flexShrink_0: {
    flexShrink: 0,
  },
  // Flex directions
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  // Flex children layout
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
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  // Flex self layout
  selfCenter: {
    alignSelf: 'center',
  },
  selfEnd: {
    alignSelf: 'flex-end',
  },
  selfStart: {
    alignSelf: 'flex-start',
  },
  // Text align
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  // Insets
  right_0: {
    right: 0,
  },
  left_0: {
    left: 0,
  },
  top_0: {
    top: 0,
  },
  bottom_0: {
    bottom: 0,
  },
  // Width & Height
  w_100: {
    width: '100%',
  },
  w_50: {
    width: '50%',
  },
  h_100: {
    height: '100%',
  },
  h_50: {
    height: '50%',
  },
  // Text Colors
  textPrimary: {
    color: COLORS.PRIMARY,
  },
  textSecondary: {
    color: COLORS.SECONDARY,
  },
  // Background Colors
  bg_primary: {
    backgroundColor: COLORS.PRIMARY,
  },
  bg_secondary: {
    backgroundColor: COLORS.SECONDARY,
  },
  // Aspect ratio
  aspectRatio_1: {
    aspectRatio: 1,
  },
  aspectRatio_16_9: {
    aspectRatio: 16 / 9,
  },
  // Margins
  m_1: {
    margin: DEFAULT_SPACE,
  },
  ml_1: {
    marginLeft: DEFAULT_SPACE,
  },
  mr_1: {
    marginRight: DEFAULT_SPACE,
  },
  mt_1: {
    marginTop: DEFAULT_SPACE,
  },
  mb_1: {
    marginBottom: DEFAULT_SPACE,
  },
  mv_1: {
    marginVertical: DEFAULT_SPACE,
  },
  mh_1: {
    marginHorizontal: DEFAULT_SPACE,
  },
  // Paddings
  p_1: {
    padding: DEFAULT_SPACE,
  },
  pv_1: {
    paddingVertical: DEFAULT_SPACE,
  },
  ph_1: {
    paddingHorizontal: DEFAULT_SPACE,
  },
  pr_1: {
    paddingRight: DEFAULT_SPACE,
  },
  pl_1: {
    paddingLeft: DEFAULT_SPACE,
  },
  pt_1: {
    paddingTop: DEFAULT_SPACE,
  },
  pb_1: {
    paddingBottom: DEFAULT_SPACE,
  },
  // Position
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'absolute',
  },
  // Border
  border_1: {
    borderWidth: 1,
  },
  border_0: {
    borderWidth: 0,
  },
  // Overflow
  overflow_hidden: {
    overflow: 'hidden',
  },
  overflow_visible: {
    overflow: 'visible',
  },
  // Font weights
  fontWeight_extraLight: {
    fontWeight: FONT_WEIGHT.extraLight,
  },
  fontWeight_light: {
    fontWeight: FONT_WEIGHT.light,
  },
  fontWeight_regular: {
    fontWeight: FONT_WEIGHT.regular,
  },
  fontWeight_semiBold: {
    fontWeight: FONT_WEIGHT.semiBold,
  },
  fontWeight_bold: {
    fontWeight: FONT_WEIGHT.bold,
  },
  fontWeight_black: {
    fontWeight: FONT_WEIGHT.black,
  },
  // Border radius
  rounded_sm: {
    borderRadius: BORDER_RADIUS.sm,
  },
  rounded_md: {
    borderRadius: BORDER_RADIUS.md,
  },
  rounded_lg: {
    borderRadius: BORDER_RADIUS.lg,
  },
  // Shadows
  shadow: SHADOWS,
  no_shadow: {
    elevation: 0,
    shadowOpacity: 0,
  },
});
