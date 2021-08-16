import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OtherScreen from 'screens/OtherScreen';
import Typography from 'screens/Typography';
import { AppParamList } from './types';

const Stack = createNativeStackNavigator<AppParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Typography" component={Typography} />
      <Stack.Screen name="OtherScreen" component={OtherScreen} />
    </Stack.Navigator>
  );
};
