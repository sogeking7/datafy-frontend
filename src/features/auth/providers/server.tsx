import React from "react";
import { ProviderAuth } from "./client";
import { getMeUser } from "@/app/actions";

export const AuthProviderServer: (values: {
  children: React.ReactNode;
}) => Promise<JSX.Element> = async ({ children }) => {
  const user = await getMeUser();

  return <ProviderAuth userInitial={user}>{children}</ProviderAuth>;
};
