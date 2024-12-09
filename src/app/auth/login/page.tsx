import { Suspense } from "react";
import { TabForm } from "../components/TabForm";

export default async function Login() {
  return (
    <Suspense>
      <TabForm />
    </Suspense>
  );
}
