import { Counterparty, User } from "@/types";
import { Response } from "@/types/api";

export type CompanyFilter = "all" | "companies" | "individuals";

export type FindCompany = (
  q: string,
  page?: string,
  size?: string,
  data_filter?: CompanyFilter
) => Promise<Response<FindCompanyResponse>>;

export type FindCompanyResponse = {
  query: string;
  results: Counterparty[];
  total_pages: number;
  total_docs: number;
  current_page: number;
};

export type FindByBin = (
  company_bin: string
) => Promise<Response<FindByBinResponse>>;

export type FindGoszakup = (
  company_bin: string
) => Promise<Response<FindGoszakupResponse>>;

type PurchaseParticipation = {
  status?: string;
  purchase_amount: number;
  contract_sum: number;
  history: {
    finYear: number;
    contractSum: string;
    trdBuyNameRu: string;
    RefSubjectType: {
      nameRu: string;
    };
    RefContractType: {
      nameRu: string;
    };
  }[];
};

export type FindGoszakupResponse = {
  goszakup_info: {
    phone: string | string[];
    website: string | string[];
    email: string | string[];
  };
  purchase_participation: PurchaseParticipation;
};

export type FindByBinResponse = {
  company_info: {
    id: number;
    biin: string;
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
    status?: string;
    tax_authority_code: string;
    tax_authority_name: string;
    dynamic_tax_records: DynamicTaxRecords;
    kbk_records: KBKRecords;
  };
};

export type DynamicTaxRecords = {
  [year: string]: {
    summa: number;
    percent: number;
  };
};

export type KBKRecord = {
  kbk: string;
  amount: number;
  percent: number;
};

export type KBKRecords = Record<string, KBKRecord>;
