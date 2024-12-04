import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CourtList = () => {
  return (
    <Card className="bg-white w-full !rounded-2xl flex flex-col border-none col-span-1">
      <CardHeader className="flex-row items-center flex justify-between">
        <CardTitle className="!text-xl">Документация</CardTitle>
      </CardHeader>
      <CardContent className="!pt-0 flex flex-col gap-6">prrp</CardContent>
    </Card>
  );
};
