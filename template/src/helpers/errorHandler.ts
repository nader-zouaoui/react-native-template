import { AxiosError } from 'axios';
import { isAxiosError } from 'models/typeguards/axiosTypeGuard';
import { showToast } from './showToast';

export const errorHandler = (error: AxiosError | Error): void => {
  if (isAxiosError(error)) {
    showToast(error.response?.data.message || error.response?.data, 'DANGER');
  } else {
    showToast(error.message, 'DANGER');
  }
};
