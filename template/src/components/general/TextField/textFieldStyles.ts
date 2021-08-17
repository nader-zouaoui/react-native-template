import {
  FONT_SIZE,
  DEFAULT_SPACE,
  INPUT_HEIGHT,
  BORDER_RADIUS,
  SHADOWS,
} from 'constants/styleVariables';
import getFontFamily from 'helpers/getFontFamily';
import { StyleSheet } from 'react-native';

export const textFieldStyles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: BORDER_RADIUS.md,
    ...SHADOWS,
  },
  textField: {
    fontSize: FONT_SIZE.body_2,
    paddingHorizontal: DEFAULT_SPACE,
    minHeight: INPUT_HEIGHT,
    fontFamily: getFontFamily('Lato'),
  },
  baseIconContainer: {
    paddingHorizontal: DEFAULT_SPACE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
