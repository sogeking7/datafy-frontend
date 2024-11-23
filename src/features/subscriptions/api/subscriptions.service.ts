import { apiPayload } from "@/lib/axios";
import { isAxiosError } from "axios";
import { GetSub, SetSub } from "./subscriptions.service.types";

export const SubscriptionService = () => {
  const url = "/subscription";

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
        data: isAxiosError(e) ? e.response?.data.detail : (e as Error).message,
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
        data: isAxiosError(e) ? e.response?.data.detail : (e as Error).message,
      };
    }
  };

  return {
    get,
    set,
  };
};
