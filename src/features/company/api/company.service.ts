import { apiPayload } from "@/lib/axios";
import { isAxiosError } from "axios";
import { FindCompany, FindCompanyResponse } from "./company.service.types";

export const CompanyService = () => {
  const url = "/company";

  const find: FindCompany = async (q) => {
    try {
      const { data } = await apiPayload().get<FindCompanyResponse>(`${url}/search`, {
        params: {
          query: q,
        },
      });
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
    find,
  };
};
