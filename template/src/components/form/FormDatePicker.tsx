import React from 'react';
import { Controller, FieldError, useFormContext, RegisterOptions } from 'react-hook-form';
import { get } from 'lodash';
import FormErrorMessage from './FormErrorMessage';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import DateTimePicker, { DateTimePickerProps } from 'components/general/DateTimePicker';

const now = new Date();

type FormDatePickerProps = Omit<DateTimePickerProps, 'value' | 'onChange'> & {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  name: string;
  validate?: RegisterOptions;
};

const FormDatePicker: React.FC<FormDatePickerProps> = ({
  name,
  validate,
  wrapperStyle,
  ...datePickerProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = get(errors, name) as FieldError | undefined;

  return (
    <View style={wrapperStyle}>
      <Controller
        rules={validate}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DateTimePicker
            {...datePickerProps}
            hasError={!!fieldError}
            value={value}
            onChange={onChange}
          />
        )}
        name={name}
        defaultValue={now}
      />
      {<FormErrorMessage>{fieldError?.message}</FormErrorMessage>}
    </View>
  );
};

export default FormDatePicker;
