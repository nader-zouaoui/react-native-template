import { useTheme } from '@react-navigation/native';
import AppText from 'components/general/AppText';
import IonicIcon from 'components/icons/IonicIcon';
import { styleGuide } from 'constants/styleGuide';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Pressable, StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Label from '../Label';
import { textFieldStyles } from '../TextField/textFieldStyles';
import DateTimePickerComponent, {
  DateTimePickerComponentProps,
} from './DateTimePickerComponent';

export type DateTimePickerProps = Omit<
  DateTimePickerComponentProps,
  'isVisible' | 'setIsVisible'
> & {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  hasError?: boolean;
};

const DateTimePicker = ({
  style,
  textStyle,
  label,
  labelStyle,
  hasError,
  ...datePickerProps
}: DateTimePickerProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const { colors } = useTheme();

  return (
    <>
      {label && (
        <Label style={labelStyle} hasError={hasError}>
          {label}
        </Label>
      )}
      <Pressable
        style={[
          styles.button,
          styleGuide.row,
          styleGuide.spaceBetween,
          styleGuide.alignCenter,
          { backgroundColor: colors.card },
          style,
        ]}
        onPress={() => setIsDatePickerOpen(true)}
      >
        <AppText style={[styles.buttonText, styleGuide.textCenter, textStyle]}>
          {format(
            datePickerProps.value,
            datePickerProps.mode === 'time' ? 'HH:mm' : 'dd/MM/yyyy',
          )}
        </AppText>
        <IonicIcon name="calendar" outline />
      </Pressable>
      <DateTimePickerComponent
        {...datePickerProps}
        iOSTitle={datePickerProps.iOSTitle ?? label}
        isVisible={isDatePickerOpen}
        setIsVisible={setIsDatePickerOpen}
      />
    </>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
  button: {
    ...textFieldStyles.container,
    ...textFieldStyles.textField,
  },
  buttonText: {
    fontSize: textFieldStyles.textField.fontSize,
    fontFamily: 'Lato',
  },
});
