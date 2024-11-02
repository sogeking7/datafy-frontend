"use server";

import { AuthService } from "@/features/auth/api/auth.service";
import { User } from "@/types";

export const getMeUser = async (): Promise<User | null> => {
  const { success, data } = await AuthService().getMe();
  // console.log(data);
  if (!success) {
    return null;
  }

  return data;
};
