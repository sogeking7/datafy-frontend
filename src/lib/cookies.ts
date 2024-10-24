import Cookies from "js-cookie";
import { isClient } from "./utils";

export const HOUR = 60 * 60 * 1000;
export const inTwoHoursClient = () => new Date(new Date().getTime() + 2 * HOUR);
export const inThirtyMins = () => new Date(new Date().getTime() + HOUR / 2);

export function getPayloadToken() {
  let token;
  if (isClient()) {
    token = Cookies.get("payload-token");
  } else {
    const { cookies } = require("next/headers");
    const cook = cookies();
    token = cook.get("payload-token")?.value;
  }
  return token;
}

export function setPayloadTokenClient(token: string) {
  Cookies.set("payload-token", token, {
    expires: inTwoHoursClient(),
  });
  Cookies.set("payload-token-expires-at", inTwoHoursClient().toUTCString(), {
    expires: inTwoHoursClient(),
  });
}
export function removePayloadTokenClient() {
  Cookies.remove("payload-token-expires-at");
  Cookies.remove("payload-token");
}
