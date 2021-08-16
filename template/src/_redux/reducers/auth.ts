import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'models/Token';
import { onAppBoot } from '_redux/actions/auth';

type AuthState = {
  initiated: boolean;
  isLoggedIn: boolean;
  currentUser?: IUser;
};

const initialState: AuthState = {
  initiated: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(onAppBoot.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
      state.isLoggedIn = true;
      state.initiated = true;
    });
  },
});

export const currentUserSelector = (state: AuthState) => state.currentUser;
export default authSlice.reducer;
