import { DefaultTheme, ExtendedTheme } from '@react-navigation/native';
import { COLORS } from 'constants/styleVariables';
import tinycolor from 'tinycolor2';

const { PRIMARY, SECONDARY, SUCCESS, INFO, WARNING, DANGER, WHITE, BLACK, TEXT } = COLORS;
const DARK = 10;
const DARKER = 15;
const DARKEST = 30;
const LIGHT = 10;
const LIGHTER = 20;
const LIGHTEST = 30;
const DEFAULT_BACKGROUND = WHITE;

export const AppTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: DEFAULT_BACKGROUND,
    background_000: tinycolor(DEFAULT_BACKGROUND).darken(0).toHexString(),
    background_050: tinycolor(DEFAULT_BACKGROUND).darken(4).toHexString(),
    background_100: tinycolor(DEFAULT_BACKGROUND).darken(10).toHexString(),
    background_200: tinycolor(DEFAULT_BACKGROUND).darken(20).toHexString(),
    background_300: tinycolor(DEFAULT_BACKGROUND).darken(30).toHexString(),
    background_400: tinycolor(DEFAULT_BACKGROUND).darken(40).toHexString(),
    background_500: tinycolor(DEFAULT_BACKGROUND).darken(50).toHexString(),
    background_600: tinycolor(DEFAULT_BACKGROUND).darken(60).toHexString(),
    background_700: tinycolor(DEFAULT_BACKGROUND).darken(70).toHexString(),
    background_800: tinycolor(DEFAULT_BACKGROUND).darken(80).toHexString(),
    background_900: tinycolor(DEFAULT_BACKGROUND).darken(90).toHexString(),
    background_1000: tinycolor(DEFAULT_BACKGROUND).darken(100).toHexString(),
    primary: PRIMARY,
    primaryDark: tinycolor(PRIMARY).darken(DARK).toHexString(),
    primaryDarker: tinycolor(PRIMARY).darken(DARKER).toHexString(),
    primaryDarkest: tinycolor(PRIMARY).darken(DARKEST).toHexString(),
    primaryLight: tinycolor(PRIMARY).lighten(LIGHT).toHexString(),
    primaryLighter: tinycolor(PRIMARY).lighten(LIGHTER).toHexString(),
    primaryLightest: tinycolor(PRIMARY).lighten(LIGHTEST).toHexString(),
    secondary: SECONDARY,
    secondaryDark: tinycolor(SECONDARY).darken(DARK).toHexString(),
    secondaryDarker: tinycolor(SECONDARY).darken(DARKER).toHexString(),
    secondaryDarkest: tinycolor(SECONDARY).darken(DARKEST).toHexString(),
    secondaryLight: tinycolor(SECONDARY).lighten(LIGHT).toHexString(),
    secondaryLighter: tinycolor(SECONDARY).lighten(LIGHTER).toHexString(),
    secondaryLightest: tinycolor(SECONDARY).lighten(LIGHTEST).toHexString(),
    success: SUCCESS,
    successDark: tinycolor(SUCCESS).darken(DARK).toHexString(),
    successDarker: tinycolor(SUCCESS).darken(DARKER).toHexString(),
    successDarkest: tinycolor(SUCCESS).darken(DARKEST).toHexString(),
    successLight: tinycolor(SUCCESS).lighten(LIGHT).toHexString(),
    successLighter: tinycolor(SUCCESS).lighten(LIGHTER).toHexString(),
    successLightest: tinycolor(SUCCESS).lighten(LIGHTEST).toHexString(),
    info: INFO,
    infoDark: tinycolor(INFO).darken(DARK).toHexString(),
    infoDarker: tinycolor(INFO).darken(DARKER).toHexString(),
    infoDarkest: tinycolor(INFO).darken(DARKEST).toHexString(),
    infoLight: tinycolor(INFO).lighten(LIGHT).toHexString(),
    infoLighter: tinycolor(INFO).lighten(LIGHTER).toHexString(),
    infoLightest: tinycolor(INFO).lighten(LIGHTEST).toHexString(),
    warning: WARNING,
    warningDark: tinycolor(WARNING).darken(DARK).toHexString(),
    warningDarker: tinycolor(WARNING).darken(DARKER).toHexString(),
    warningDarkest: tinycolor(WARNING).darken(DARKEST).toHexString(),
    warningLight: tinycolor(WARNING).lighten(LIGHT).toHexString(),
    warningLighter: tinycolor(WARNING).lighten(LIGHTER).toHexString(),
    warningLightest: tinycolor(WARNING).lighten(LIGHTEST).toHexString(),
    danger: DANGER,
    dangerDark: tinycolor(DANGER).darken(DARK).toHexString(),
    dangerDarker: tinycolor(DANGER).darken(DARKER).toHexString(),
    dangerDarkest: tinycolor(DANGER).darken(DARKEST).toHexString(),
    dangerLight: tinycolor(DANGER).lighten(LIGHT).toHexString(),
    dangerLighter: tinycolor(DANGER).lighten(LIGHTER).toHexString(),
    dangerLightest: tinycolor(DANGER).lighten(LIGHTEST).toHexString(),
    textSecondary: TEXT.BLACK.SECONDARY,
    white: WHITE,
    black: BLACK,
  },
};
