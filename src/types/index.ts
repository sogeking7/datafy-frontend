import { CompanyFilter } from "@/features/company/api/company.service.types";

export type User = {
  uui: string;
  fullname: string;
  username: string;
  about: string;
  city: string;
  email: string;
  password: string;
};

export type Counterparty = {
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
