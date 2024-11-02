import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = (access_token: string | null | undefined) =>
  axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: access_token ? `Bearer ${access_token}` : undefined,
    },
    withCredentials: true,
  });

export const apiPayload = () => {
  const access_token = localStorage.getItem("access-token");
  return api(access_token);
};
