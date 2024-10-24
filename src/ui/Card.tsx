import { FC, ReactNode } from "react";
import { Button } from "@/components/ui/button";

export const CardButton: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Button
      className="w-full bg-black hover:bg-black relative font-semibold text-lg h-12"
      variant="default"
    >
      <span
        className="-translate-x-1 -translate-y-1 absolute w-full h-full rounded-md border-2 border-black bg-yellow-500 hover:-translate-y-2 hover:-translate-x-2
    active:translate-x-0 active:translate-y-0
    transition-all flex justify-center items-center"
      >
        <span>{children}</span>
      </span>
    </Button>
  );
};
