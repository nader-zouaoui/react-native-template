import '@react-navigation/native';

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      primaryDark: string;
      primaryLight: string;
      secondary: string;
      secondaryDark: string;
      secondaryLight: string;
      success: string;
      info: string;
      warning: string;
      danger: string;
      background: string;
      card: string;
      text: string;
      textSecondary: string;
      textDisabled: string;
      white: string;
      black: string;
      border: string;
      notification: string;
      background_000: string;
      background_100: string;
      background_200: string;
      background_300: string;
      background_400: string;
      background_500: string;
      background_600: string;
      background_700: string;
      background_800: string;
      background_900: string;
      background_1000: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}
