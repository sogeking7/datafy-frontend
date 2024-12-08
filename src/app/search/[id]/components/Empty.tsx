import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const Empty = () => {
  return (
    <Card className="!rounded-2xl border-none w-full overflow-visible">
      <CardHeader>
        <CardTitle>Документация</CardTitle>
      </CardHeader>
      <CardContent className="min-h-[400px] flex w-full items-center justify-center">
        <div className="flex justify-center flex-col gap-3 items-center">
          <div className="size-24 rounded-full bg-[#F0F4F9] flex items-center justify-center">
            <Image
              src={"/notfound.png"}
              alt="notfound.png"
              width={60}
              height={60}
            />
          </div>
          <p className="font-medium text-sm">Документация отсутствует</p>
        </div>
      </CardContent>
    </Card>
  );
};
