import * as React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProviderServer } from "@/features/auth/providers/server";
import { ProviderTanstack } from "@/features/auth/providers/tanstack";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProviderTanstack>
      {process.env.DEV && <ReactQueryDevtools />}
      <AuthProviderServer>{children}</AuthProviderServer>
    </ProviderTanstack>
  );
};
