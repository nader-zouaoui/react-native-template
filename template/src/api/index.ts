import axios from 'axios';
import { Platform } from 'react-native';
import { ANDROID_API_URL, IOS_API_URL, DEPLOYMENT_API } from '@env';
import { refreshUserToken } from '_redux/actions/auth';

export const API = __DEV__
  ? `http://${Platform.OS === 'android' ? ANDROID_API_URL : IOS_API_URL}:2395`
  : DEPLOYMENT_API;

const api = axios.create({
  baseURL: `${API}/api/v1/`,
  timeout: 1000000,
});

export const resetAuthToken = async (token?: string) => {
  if (token) {
    api.defaults.headers.Authorization = `bearer ${token}`;
  } else {
    api.defaults.headers.Authorization = null;
  }
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;

    if (
      error.response?.status === 403 &&
      error.response.data === 'Token expired' &&
      !request._retry
    ) {
      request._retry = true;
      await refreshUserToken();
      request.headers.Authorization = api.defaults.headers.Authorization;

      return api(request);
    }

    return Promise.reject(error);
  },
);
export default api;
