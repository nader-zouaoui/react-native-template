import { TextStyle } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

type IFontWeights = 'extraLight' | 'light' | 'regular' | 'semiBold' | 'bold' | 'black';

export const COLORS = {
  PRIMARY: '#ec407a',
  PRIMARY_DARK: '#b4004e',
  PRIMARY_LIGHT: '#ff77a9',
  SECONDARY: '#303f9f',
  SECONDARY_DARK: '#001970',
  SECONDARY_LIGHT: '#666ad1',
  SUCCESS: '#73BB9B',
  INFO: '#1883BC',
  WARNING: '#ffba00',
  DANGER: '#fa383e',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  TEXT: {
    BLACK: {
      MAIN: 'rgba(0,0,0,0.87)',
      SECONDARY: 'rgba(0,0,0,0.60)',
      DISABLED: 'rgba(0,0,0,0.38)',
    },
    WHITE: {
      MAIN: 'rgba(255,255,255,0.87)',
      SECONDARY: 'rgba(255,255,255,0.60)',
      DISABLED: 'rgba(255,255,255,0.38)',
    },
  },
};

export const FONT_WEIGHT: Record<IFontWeights, TextStyle['fontWeight']> = {
  extraLight: '200',
  light: '300',
  regular: 'normal',
  semiBold: '600',
  bold: 'bold',
  black: '900',
} as const;

export const FONT_SIZE = {
  h1: scale(96),
  h2: scale(60),
  h3: scale(48),
  h4: scale(34),
  h5: scale(24),
  h6: scale(20),
  subtitle_1: scale(16),
  subtitle_2: scale(14),
  body_1: scale(16),
  body_2: scale(14),
  button: scale(14),
  caption: scale(12),
  overline: scale(10),
};

export const SHADOWS = {
  elevation: 5,
  shadowColor: COLORS.BLACK,
  shadowOffset: { width: 2, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
};

export const BORDER_RADIUS = {
  sm: scale(2),
  md: scale(5),
  lg: scale(10),
};

export const INPUT_HEIGHT = verticalScale(40);
export const DEFAULT_SPACE = scale(10);
export const VERTICAL_DEFAULT_SPACE = verticalScale(10);
