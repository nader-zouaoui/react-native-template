import React from 'react';
import { Controller, FieldError, useFormContext, RegisterOptions } from 'react-hook-form';
import { get } from 'lodash';
import { StyleProp, View, ViewStyle } from 'react-native';
import FormErrorMessage from './FormErrorMessage';
import Select, { SelectProps } from 'components/general/Select';

type FormSelectProps<T> = Omit<SelectProps<T>, 'onChange' | 'value' | 'hasError'> & {
  name: string;
  validate?: RegisterOptions;
  wrapperStyle?: StyleProp<ViewStyle>;
};

const FormSelect = <T extends unknown>({
  name,
  validate,
  wrapperStyle,
  ...selectProps
}: FormSelectProps<T>) => {
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
          <Select {...selectProps} onChange={onChange} value={value} hasError={!!fieldError} />
        )}
        name={name}
      />
      <FormErrorMessage>{fieldError?.message}</FormErrorMessage>
    </View>
  );
};

export default FormSelect;
