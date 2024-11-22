import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { SubscriptionService } from "../api/subscriptions.service";
import { MySkelet } from "@/ui/MySkelet";

export const TarifCard = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["get-sub"],
    queryFn: async () => await SubscriptionService().get(),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });

  if (isPending) {
    return <MySkelet className="h-full" />;
  }

  if (error) return "An error has occurred: " + error.message;

  if (!data.success) {
    return (
      <Card className="col-span-1 bg-white !rounded-2xl flex flex-col border-none">
        <CardContent className="">
          <p className="text-destructive">
            {"Ошибка, повторите попытку позже" || data.data}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-1 bg-white !rounded-2xl flex flex-col border-none">
      <CardContent className="p-4 sm:p-6">Tarpif</CardContent>
    </Card>
  );
};
