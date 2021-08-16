import { DBDocument } from './utils';

export interface Token {
  refreshToken: string;
  accessToken: string;
}

export interface IUser extends DBDocument {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUserToken {
  token: Token;
  user: IUser;
}
