import React from 'react';
import { TextInput } from 'react-native';

export const getFieldRef =
  (externalRef: React.MutableRefObject<TextInput | null>) =>
  (ref: React.RefObject<TextInput>) => {
    externalRef.current = ref.current;
  };
