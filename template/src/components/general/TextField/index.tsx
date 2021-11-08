import React, { forwardRef } from 'react';
import { TextInput, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Label from 'components/general/Label';
import { TextFieldProps } from './textFieldTypes';
import { useTextField } from './useTextField';
import { textFieldStyles } from './textFieldStyles';
import { styleGuide } from 'constants/styleGuide';

const TextField = forwardRef<TextInput, TextFieldProps>(
  (
    {
      label,
      containerStyle,
      isPassword,
      isEmail,
      nextField,
      hasError,
      labelStyle,
      iconRight,
      iconLeft,
      ...inputProps
    },
    ref,
  ) => {
    const { colors } = useTheme();
    const { renderLeft, renderRight, handleFocusNextField, passwordVisible } = useTextField({
      iconLeft,
      iconRight,
      isPassword,
    });

    return (
      <View>
        {label && (
          <Label style={labelStyle} hasError={hasError}>
            {label}
          </Label>
        )}
        <View
          style={[
            styleGuide.row,
            textFieldStyles.container,
            { backgroundColor: colors.card },
            hasError && { borderColor: colors.danger, shadowColor: colors.danger },
            containerStyle,
          ]}
        >
          {renderLeft()}
          <TextInput
            {...inputProps}
            scrollEnabled={false}
            ref={ref}
            style={[
              textFieldStyles.textField,
              styleGuide.flex_1,
              { color: colors.text },
              inputProps.style,
            ]}
            selectionColor={colors.primary}
            keyboardType={isEmail ? 'email-address' : inputProps.keyboardType}
            autoCapitalize={isEmail || isPassword ? 'none' : inputProps.autoCapitalize}
            placeholderTextColor={colors.textSecondary}
            secureTextEntry={isPassword ? !passwordVisible : false}
            returnKeyType={nextField ? 'next' : inputProps.returnKeyType}
            blurOnSubmit={nextField ? false : inputProps.blurOnSubmit}
            onSubmitEditing={nextField ? handleFocusNextField : inputProps.onSubmitEditing}
          />
          {renderRight()}
        </View>
      </View>
    );
  },
);

export default TextField;
