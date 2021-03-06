import React from 'react';
import { Controller, FieldError, useFormContext, RegisterOptions } from 'react-hook-form';
import { get } from 'lodash';
import { StyleProp, View, ViewStyle } from 'react-native';
import FormErrorMessage from './FormErrorMessage';
import { TextFieldProps } from 'components/general/TextField/textFieldTypes';
import TextField from 'components/general/TextField';

type FormTextFieldProps = TextFieldProps & {
  name: string;
  validate?: RegisterOptions;
  wrapperStyle?: StyleProp<ViewStyle>;
};

const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  validate,

  wrapperStyle,
  ...textFieldProps
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
        render={({ field: { onChange, value, onBlur } }) => (
          <TextField
            {...textFieldProps}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            hasError={!!fieldError}
          />
        )}
        name={name}
      />
      <FormErrorMessage>{fieldError?.message}</FormErrorMessage>
    </View>
  );
};

export default FormTextField;
