import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from 'navigator/Navigator';
import React from 'react';
import store from '_redux/store';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import { AppTheme } from 'themes';
import { navigationRef } from 'services/NavigationService';

const App = () => {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <NavigationContainer theme={AppTheme} ref={navigationRef}>
          <Navigator />
        </NavigationContainer>
      </RootSiblingParent>
    </Provider>
  );
};

export default App;
