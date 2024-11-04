import { apiPayload } from "@/lib/axios";
import { isAxiosError } from "axios";
import { FindCompany, FindCompanyResponse } from "./company.service.types";

export const CompanyService = () => {
  const url = "/company";

  const find: FindCompany = async (q, page, size) => {
    try {
      const { data } = await apiPayload().get<FindCompanyResponse>(
        `${url}/search`,
        {
          params: {
            query: q || "A",
            page: page || "1",
            size: size || "10", 
          },
        }
      );
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
