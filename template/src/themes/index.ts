import { DefaultTheme, ExtendedTheme } from '@react-navigation/native';
import { COLORS } from 'constants/styleVariables';
import tinycolor from 'tinycolor2';

const { PRIMARY, SECONDARY, SUCCESS, INFO, WARNING, DANGER, WHITE, BLACK, TEXT } = COLORS;
const DARK = 10;
const LIGHT = 10;
const DEFAULT_BACKGROUND = WHITE;

export const AppTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: DEFAULT_BACKGROUND,
    background_000: tinycolor(DEFAULT_BACKGROUND).lighten(0).toHexString(),
    background_100: tinycolor(DEFAULT_BACKGROUND).lighten(10).toHexString(),
    background_200: tinycolor(DEFAULT_BACKGROUND).lighten(20).toHexString(),
    background_300: tinycolor(DEFAULT_BACKGROUND).lighten(30).toHexString(),
    background_400: tinycolor(DEFAULT_BACKGROUND).lighten(40).toHexString(),
    background_500: tinycolor(DEFAULT_BACKGROUND).lighten(50).toHexString(),
    background_600: tinycolor(DEFAULT_BACKGROUND).lighten(60).toHexString(),
    background_700: tinycolor(DEFAULT_BACKGROUND).lighten(70).toHexString(),
    background_800: tinycolor(DEFAULT_BACKGROUND).lighten(80).toHexString(),
    background_900: tinycolor(DEFAULT_BACKGROUND).lighten(90).toHexString(),
    background_1000: tinycolor(DEFAULT_BACKGROUND).lighten(100).toHexString(),
    primary: PRIMARY,
    primaryDark: tinycolor(PRIMARY).darken(DARK).toHexString(),
    primaryLight: tinycolor(PRIMARY).lighten(LIGHT).toHexString(),
    secondary: SECONDARY,
    secondaryDark: tinycolor(SECONDARY).darken(DARK).toHexString(),
    secondaryLight: tinycolor(SECONDARY).lighten(LIGHT).toHexString(),
    success: SUCCESS,
    info: INFO,
    warning: WARNING,
    white: WHITE,
    danger: DANGER,
    black: BLACK,
    textSecondary: TEXT.BLACK.SECONDARY,
    text: TEXT.BLACK.MAIN,
    textDisabled: TEXT.BLACK.DISABLED,
  },
};
