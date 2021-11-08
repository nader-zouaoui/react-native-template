import { StyleProp, TextInput, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import React from 'react';

type RenderIconTypeBase = {
  iconColor?: string;
  iconOutline?: boolean;
  iconSize?: number;
  onPress?: () => void;
};

export type RenderIconIconName = RenderIconTypeBase & {
  iconName: string;
};
export type RenderIconRender = RenderIconTypeBase & {
  renderIcon: JSX.Element;
};

export type RenderIconType = RenderIconIconName | RenderIconRender;

export type TextFieldProps = TextInputProps & {
  label?: string;
  isPassword?: boolean;
  isEmail?: boolean;
  hasError?: boolean;
  nextField?: React.RefObject<TextInput>;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconRight?: RenderIconType;
  iconLeft?: RenderIconType;
};
