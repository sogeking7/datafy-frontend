import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const RelCard = ({ title, list }: { title: string; list: string[] }) => {
  return (
    <Card className="border-none !rounded-2xl">
      <CardHeader>
        <CardTitle className="!text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="md:pt-0 flex gap-3 flex-col">
        {list.map((v) => (
          <div key={v} className="px-3 rounded-lg py-2 font-medium bg-gray-100">
            {v}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
