import { CardTitle } from "@/components/ui/card";
import { PaymentsList } from "./components/PaymentsList";

export default function Page() {
  return (
    <>
      <CardTitle>История платежей</CardTitle>
      <PaymentsList />
    </>
  );
}
