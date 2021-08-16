import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import auth from '_redux/reducers/auth';

import { signOut } from '_redux/actions/auth';

const combinedReducer = combineReducers({
  auth,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === signOut.fulfilled.type) {
    state = undefined;
  }

  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    if (__DEV__) {
      import('redux-flipper').then((importResult) => {
        const reduxFlipper = importResult.default;

        return getDefaultMiddleware().concat(reduxFlipper());
      });
    }

    return getDefaultMiddleware();
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
