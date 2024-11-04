import { User } from "@/types";
import { Response } from "@/types/api";

export type UpdateUserData = (body: Partial<User>) => Promise<Response<User>>;
export type UpdateUserPassword = (body: Partial<User>) => Promise<Response<User>>;
