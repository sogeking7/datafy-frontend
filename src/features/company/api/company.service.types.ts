import { Counterparty, User } from "@/types";
import { Response } from "@/types/api";

export type FindCompany = (
  q: string,
  page?: string,
  size?: string
) => Promise<Response<FindCompanyResponse>>;

export type FindCompanyResponse = {
  query: string;
  results: Counterparty[];
};

export type FindByBin = (
  company_bin: string
) => Promise<Response<FindByBinResponse>>;

export type FindByBinResponse = {
  company_info: {
    id: number;
    bin: string;
    name: string;
    oked_code: string;
    oked_name: string;
    additional_okeds: string[];
    date_registration: string;
    krp_code: string;
    krp_name: string;
    kse_code: string;
    kse_name: string;
    type_of_ownership: string;
    fullname_director: string;
    kato_code: string;
    legal_address: string;
    judical_address: string;
    type: string;
  };
  tax_info: {
    tax_authority_code: string;
    tax_authority_name: string;
  };
};
