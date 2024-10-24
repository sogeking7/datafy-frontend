"use server";

import type { User } from "@/app/payload-types";
import { AuthService } from "@/features/auth/api/auth.service";

export const getMeUser = async (): Promise<User | null> => {
  const { success, data } = await AuthService().getMe();
  if (!success) {
    return null;
  }

  return data.user;
};
