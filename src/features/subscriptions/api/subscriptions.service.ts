import { apiPayload } from "@/lib/axios";
import { isAxiosError } from "axios";
import { GetSub, SetSub } from "./subscriptions.service.types";

export const SubscriptionService = () => {
  const url = "/user";

  const get: GetSub = async () => {
    try {
      const { data } = await apiPayload().get<any>(`${url}`);
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

  const set: SetSub = async (body) => {
    try {
      const { data } = await apiPayload().post<any>(`${url}`, body);
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
    get,
    set,
  };
};
