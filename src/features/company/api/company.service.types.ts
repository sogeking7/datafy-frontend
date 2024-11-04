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
