import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { resetAuthToken } from 'api';
import { AxiosRequestConfig } from 'axios';
import { errorHandler } from 'helpers/errorHandler';
import { IUser, IUserToken, Token } from 'models/Token';
import EncryptedStorage from 'react-native-encrypted-storage';
import RNBootSplash from 'react-native-bootsplash';

export const refreshUserToken = async () => {
  const token = await EncryptedStorage.getItem('userToken');

  if (!token) throw new Error('no token found');
  const { refreshToken }: Token = JSON.parse(token);

  const refreshTokenResponse = await api.get<string>('/users/refresh-token', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  resetAuthToken(refreshTokenResponse.data);
};

export const onAppBoot = createAsyncThunk('auth/onAppBoot', async (_, { rejectWithValue }) => {
  try {
    await refreshUserToken();
    const response = await api.get<IUser>('/users/by-token');

    RNBootSplash.hide({ fade: true });

    return response.data;
  } catch (error) {
    RNBootSplash.hide({ fade: true });

    return rejectWithValue(error.message);
  }
});

export const signOut = createAsyncThunk('auth/signOut', async (_, { rejectWithValue }) => {
  try {
    const token = await EncryptedStorage.getItem('userToken');

    if (!token) throw new Error('no token found');
    const formattedToken: Token = JSON.parse(token);
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${formattedToken.refreshToken}`,
      },
    };

    await api.post<IUserToken>('users/sign-out', {}, config);
    resetAuthToken();
    await EncryptedStorage.removeItem('userToken');
  } catch (error) {
    errorHandler(error);

    return rejectWithValue(error.message);
  }
});
