import { Response } from "@/types/api";

export type SubType = "basic" | "weekly" | "monthly" | "annualy";

export type SetSub = (subscription_type: SubType) => Promise<Response<any>>;

export type GetSub = () => Promise<Response<any>>;
