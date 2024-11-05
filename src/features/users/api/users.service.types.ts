import { User } from "@/types";
import { Response } from "@/types/api";

export type UpdateUserData = (body: {
  username: string;
  fullname: string;
}) => Promise<Response<User>>;
export type UpdateUserPassword = (body: {
  password: string;
}) => Promise<Response<User>>;
