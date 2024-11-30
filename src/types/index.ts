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
  title: string;
  type: "companies" | "individuals";
  data: string;
  author: string;
  map: string;
  current_type: string;
  country_name: string;
  country_code: string;
  // dash
  date: string;
  biin: string;
  name: string;
  fullname_director: string;
  legal_address: string;
  judical_address: string;
  kato_code: string;
  oked_name: string;
  date_registration: string;
  krp_name: string;
};
