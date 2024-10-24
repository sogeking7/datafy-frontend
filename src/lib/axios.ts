import axios from "axios";
import { getPayloadToken } from "./cookies";

const urlPayload = process.env.NEXT_PUBLIC_API_URL;

const api = (token: string | null | undefined) =>
  axios.create({
    baseURL: urlPayload,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: token ? `JWT ${token}` : undefined,
    },
    withCredentials: true,
  });

export const apiPayload = () => {
  const token = getPayloadToken();
  return api(token);
};
