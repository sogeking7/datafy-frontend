import { PaymentCard } from "./PaymentCard";

export const PaymentsList = () => {
  return (
    <ul className="flex flex-col gap-3">
      <PaymentCard tarif="weekly" />
      <PaymentCard tarif="weekly" />
      <PaymentCard tarif="monthly" />
      <PaymentCard tarif="monthly" />
    </ul>
  );
};
