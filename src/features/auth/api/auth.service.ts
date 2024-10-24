import { apiPayload } from "@/lib/axios";
import { Create, CreateResponse, Response } from "@/types/api";
import { isAxiosError } from "axios";
import {
  ForgotPassword,
  ForgotPasswordResponse,
  GetMe,
  GetMeResponse,
  Login,
  LoginResponse,
  Logout,
  LogoutResponse,
  Refresh,
  RefreshResponse,
} from "@/types/auth";
import { User } from "@/types";

export const AuthService = () => {
  const url = "/users";

  const getMe: GetMe = async () => {
    try {
      const { data } = await apiPayload().get<GetMeResponse>(`${url}/me`);
      return {
        success: true,
        data: data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const login: Login = async (args) => {
    try {
      const { data } = await apiPayload().post<LoginResponse>(
        `${url}/login`,
        args
      );
      return {
        success: true,
        data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const create: Create<User> = async (args) => {
    try {
      const { data } = await apiPayload().post<CreateResponse<User>>(
        `${url}`,
        args
      );
      return {
        success: true,
        data: data.doc,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const logout: Logout = async () => {
    try {
      const { data } = await apiPayload().post<LogoutResponse>(`${url}/logout`);
      return {
        success: true,
        data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const forgotPassword: ForgotPassword = async (args) => {
    try {
      const { data } = await apiPayload().post<ForgotPasswordResponse>(
        `${url}/forgot-password`,
        args
      );
      return {
        success: true,
        data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const refreshToken: Refresh = async () => {
    try {
      const { data } = await apiPayload().post<RefreshResponse>(
        `${url}/refresh-token`
      );
      return {
        success: true,
        data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  return {
    login,
    create,
    logout,
    forgotPassword,
    getMe,
    refreshToken,
  };
};
