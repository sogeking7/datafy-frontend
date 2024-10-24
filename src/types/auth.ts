import { User } from ".";
import { Response } from "./api";

export type Login = (body: {
  email: string;
  password: string;
}) => Promise<Response<LoginResponse>>;

export type LoginResponse = {
  message: string;
  user: User;
  token: string;
  exp: number;
};

export type Logout = () => Promise<Response<LogoutResponse>>;

export type LogoutResponse = {
  message: string;
};

export type GetMe = (token?: string) => Promise<Response<GetMeResponse>>;

export type GetMeResponse = {
  user: User;
  collection: string;
  token: string;
  exp: number;
};

export type ForgotPassword = (body: {
  email: string;
}) => Promise<Response<ForgotPasswordResponse>>;

export type ForgotPasswordResponse = {
  message: string;
};

export type VerifyUser = () => Promise<Response<VerifyUserResponse>>;

export type VerifyUserResponse = {
  message: string;
};

export type Refresh = () => Promise<Response<RefreshResponse>>;

export type RefreshResponse = {
  message: string;
  user: User;
  refreshedToken: string;
  exp: number;
};
