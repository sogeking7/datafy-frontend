import { apiPayload } from "@/lib/axios";
import { isAxiosError } from "axios";
import { UpdateUserData, UpdateUserPassword } from "./users.service.types";

export const UsersService = () => {
  const url = "/user";

  const updateUserData: UpdateUserData = async (body) => {
    try {
      const { data } = await apiPayload().post<any>(`${url}/me`, body);
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

  const updateUserPassword: UpdateUserPassword = async (body) => {
    try {
      const { data } = await apiPayload().post<any>(
        `${url}/change_password`,
        body
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
    updateUserData,
    updateUserPassword,
  };
};
