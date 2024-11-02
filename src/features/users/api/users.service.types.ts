import { User } from "@/types";
import { Response } from "@/types/api";

export type UpdateUserById = (
  id: string | number,
  body: Partial<User>
) => Promise<Response<User>>;
