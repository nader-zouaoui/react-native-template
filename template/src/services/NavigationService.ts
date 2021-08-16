import React from 'react';
import { DrawerActions, NavigationContainerRef, StackActions } from '@react-navigation/native';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const navigationRef = React.createRef<NavigationContainerRef<any>>();
const back = () => {
  navigationRef.current?.goBack();
};
// eslint-disable-next-line @typescript-eslint/ban-types
const navigate = (name: string, params?: object) => {
  navigationRef.current?.navigate(name, params);
};

const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};
const closeDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
};

const toggleDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
};

export default {
  navigate,
  back,
  toggleDrawer,
  closeDrawer,
  popToTop,
};
