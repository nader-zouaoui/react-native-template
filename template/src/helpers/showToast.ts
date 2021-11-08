import { styleGuide } from 'constants/styleGuide';
import { COLORS, FONT_WEIGHT } from 'constants/styleVariables';
import Toast from 'react-native-root-toast';
import { strings } from 'translations/translate';
import getFontFamily from './getFontFamily';

export const showToast = (
  message: string = strings.toasts.defaultErrorMessage,
  type: keyof Omit<typeof COLORS, 'TEXT'> = 'DANGER',
) => {
  Toast.show(message, {
    position: 80,
    containerStyle: [styleGuide.p_1],
    backgroundColor: COLORS[type],
    textStyle: [
      styleGuide.caption,
      {
        fontFamily: getFontFamily('Poppins', { fontWeight: FONT_WEIGHT.bold }),
        color: type === 'WHITE' ? COLORS.TEXT.BLACK.MAIN : COLORS.TEXT.WHITE.MAIN,
      },
    ],
  });
};
