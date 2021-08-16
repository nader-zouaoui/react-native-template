import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppDispatch } from 'hooks/reduxHooks';
import React, { useEffect } from 'react';
import OtherScreen from 'screens/OtherScreen';
import Typography from 'screens/Typography';
import { onAppBoot } from '_redux/actions/auth';
import { AppParamList } from './types';

const Stack = createNativeStackNavigator<AppParamList>();

export const AppNavigator = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onAppBoot());
  }, [dispatch]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Typography" component={Typography} />
      <Stack.Screen name="OtherScreen" component={OtherScreen} />
    </Stack.Navigator>
  );
};
