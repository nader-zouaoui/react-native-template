import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppParamList = {
  Typography: undefined;
  OtherScreen: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<AppParamList, keyof AppParamList>;
export type AppRouteProp<T extends keyof AppParamList> = RouteProp<AppParamList, T>;
