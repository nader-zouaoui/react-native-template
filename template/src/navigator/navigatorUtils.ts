/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppNavigationProp<T extends Record<string, any>> = NativeStackNavigationProp<
  T,
  keyof T
>;
export type AppRouteProp<T extends Record<string, any>> = RouteProp<T, keyof T>;
