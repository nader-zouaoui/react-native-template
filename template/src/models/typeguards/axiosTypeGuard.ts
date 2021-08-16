import { AxiosError } from 'axios';

export const isAxiosError = (error: Error | AxiosError): error is AxiosError =>
  (error as AxiosError).isAxiosError === true;
