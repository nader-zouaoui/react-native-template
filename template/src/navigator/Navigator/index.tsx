import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppDispatch } from 'hooks/reduxHooks';
import React, { useEffect } from 'react';
import Components from 'screens/Components';
import Typography from 'screens/Typography';
import { onAppBoot } from '_redux/actions/auth';
import { NavigatorParamList } from './types';

const Stack = createNativeStackNavigator<NavigatorParamList>();

export const Navigator = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onAppBoot());
  }, [dispatch]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Typography" component={Typography} />
      <Stack.Screen name="Components" component={Components} />
    </Stack.Navigator>
  );
};
