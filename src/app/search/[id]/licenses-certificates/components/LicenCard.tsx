import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import DownloadIcon from "@/../public/iconly/Light/Download.svg";

export const LicenCard = ({
  title,
  a = false,
}: {
  title: string;
  a?: boolean;
}) => {
  return (
    <Card className="col-span-1 lg:items-center flex md:gap-3 lg:flex-row flex-col relative bg-gray-100 rounded-lg md:rounded-xl border-none">
      <CardHeader className="w-full">
        <CardTitle className="!text-lg mb-1">{title}</CardTitle>
        <div className="font-semibold text-sm rounded-md py-1 px-3 bg-[#4AAF57]/10 text-[#4AAF57] max-w-min">
          Действует
        </div>
      </CardHeader>
      <div className="p-4 lg:p-6 lg:flex-shrink-0">
        <div className="lg:border-l-[1px] lg:pl-6 h-full md:border-l-gray-300  gap-3  flex lg:flex-col lg:items-center w-full max-lg:justify-end">
          <Button
            size={"sm"}
            variant={"outline"}
            className="md:w-full max-lg:max-w-min"
          >
            Подробнее
          </Button>
          {a ? (
            <></>
          ) : (
            <Button size={"sm"} className="gap-3 md:w-full max-w-min ">
              <DownloadIcon className="full-current stroke-white stroke-[1.5]" />
              Скачать
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
