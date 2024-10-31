import { apiPayload } from "@/lib/axios";
import { isAxiosError } from "axios";
import { UpdateUserById } from "./users.service.types";

export const UsersService = () => {
  const url = "/users";

  const updateUser: UpdateUserById = async (id, body) => {
    try {
      const { data } = await apiPayload().patch<any>(`${url}/${id}`, body);
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
    updateUser,
  };
};
