import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export const MySkelet = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("w-full p-6 bg-white rounded-md md:rounded-xl", className)}
    >
      <Skeleton className="w-1/2 h-5 md:h-7" />
      <Skeleton className="w-full h-3 md:h-5 mt-3" />
      <Skeleton className="w-4/5 h-3 md:h-5 mt-3" />
    </div>
  );
};
