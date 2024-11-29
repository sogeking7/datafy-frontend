import { apiPayload } from "@/lib/axios";
import { isAxiosError } from "axios";
import {
  FindByBin,
  FindByBinResponse,
  FindCompany,
  FindCompanyResponse,
  FindGoszakup,
  FindGoszakupResponse,
} from "./company.service.types";

export const CompanyService = () => {
  const url = "/company";

  const find: FindCompany = async (q, page, size, data_filter) => {
    try {
      const { data } = await apiPayload().get<FindCompanyResponse>(
        `${url}/search`,
        {
          params: {
            query: q || "A",
            page: page || "1",
            size: size || "10",
            data_filter: data_filter || "all",
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

  const findByBin: FindByBin = async (company_bin) => {
    try {
      const { data } = await apiPayload().get<FindByBinResponse>(
        `${url}/details`,
        {
          params: {
            company_bin,
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

  const findGoszakup: FindGoszakup = async (company_bin) => {
    try {
      const { data } = await apiPayload().get<FindGoszakupResponse>(
        `${url}/goszakup`,
        {
          params: {
            company_bin,
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
    findByBin,
    findGoszakup,
  };
};
