import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { TextInput, Pressable } from 'react-native';
import MaterialIcon from 'components/icons/MaterialIcon';
import { styleGuide } from 'constants/styleGuide';
import { getIconContent } from './textFieldUtils';
import { textFieldStyles } from './textFieldStyles';
import { TextFieldProps } from './textFieldTypes';

export const useTextField = ({
  handleFocus,
  isPassword,
  iconRight,
  iconLeft,
  nextField,
}: Pick<
  TextFieldProps,
  'handleFocus' | 'isPassword' | 'iconRight' | 'iconLeft' | 'nextField'
>) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible((prev) => !prev);
  }, []);
  const fieldRef = useRef<TextInput>(null);

  useEffect(() => {
    if (handleFocus) {
      handleFocus(fieldRef);
    }
  }, [fieldRef, handleFocus]);
  const handleFocusNextField = () => {
    if (nextField && nextField.current) {
      nextField.current.focus();
    }
  };

  const hasRightContent = useMemo(() => iconRight || isPassword, [iconRight, isPassword]);

  const renderRight = useCallback(() => {
    if (!hasRightContent) return;
    let onPress: (() => void) | undefined;
    let element: JSX.Element;

    if (iconRight) {
      ({ onPress } = iconRight);
      element = getIconContent(iconRight);
    } else {
      onPress = togglePasswordVisibility;
      element = <MaterialIcon name={passwordVisible ? 'eye' : 'eye-off'} outline />;
    }

    return (
      <Pressable
        style={[textFieldStyles.baseIconContainer, styleGuide.right_0]}
        onPress={onPress}
      >
        {element}
      </Pressable>
    );
  }, [hasRightContent, passwordVisible, togglePasswordVisibility, iconRight]);

  const renderLeft = useCallback(() => {
    if (!iconLeft) return;

    return (
      <Pressable
        style={[textFieldStyles.baseIconContainer, styleGuide.left_0]}
        onPress={iconLeft.onPress}
      >
        {getIconContent(iconLeft)}
      </Pressable>
    );
  }, [iconLeft]);

  return {
    renderLeft,
    renderRight,
    handleFocusNextField,
    passwordVisible,
    fieldRef,
  };
};
