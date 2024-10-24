import { User } from "@/app/payload-types";
import { apiPayload } from "@/lib/axios";
import { UpdateById, UpdateByIdResponse } from "@/types/api";
import { isAxiosError } from "axios";

export const UsersService = () => {
  const url = "/users";

  const updateUser: UpdateById<User> = async (id, body) => {
    try {
      const { data } = await apiPayload().patch<UpdateByIdResponse<User>>(
        `${url}/${id}`,
        body,
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

  return {
    updateUser,
  };
};
