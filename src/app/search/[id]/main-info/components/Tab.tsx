import DangerCirlcle from "@/../public/iconly/Light/Danger Circle.svg";
import CopyToClipboard from "@/components/ui/copy-to-clickboard";
import { cn } from "@/lib/utils";
import { ChevronRight, CircleAlert } from "lucide-react";

type TabProps = {
  variant?: "default" | "sm";
  copyToClickboard?: boolean;
  keyv: string | any;
  value: string;
  action: boolean;
  onClick?: () => void;
} & ( // Conditional type: onClick is required if action is true
  | { action: true; onClick: () => void }
  | { action: false; onClick?: undefined }
);

export const Tab = ({
  variant = "default",
  copyToClickboard = false,
  keyv,
  value,
  action,
  onClick,
}: TabProps) => {
  return (
    <div
      className={cn(
        "bg-gray-100 flex justify-between  text-sm gap-2",
        variant === "default" &&
          "rounded-lg md:rounded-xl px-3 py-3 md:px-4 md:py-3 font-semibold ",
        variant === "sm" && "rounded-lg py-2 px-3 font-medium"
      )}
    >
      <div className="flex gap-3 items-center">
        {variant === "default" && (
          <CircleAlert className="text-gray-400  min-w-5 min-h-5 w-5 h-5" />
        )}
        <p className="text-left text-balance">{keyv}</p>
      </div>
      {action ? (
        <button>
          <ChevronRight className="text-primary" />
        </button>
      ) : (
        <>
          {copyToClickboard && value ? (
            <CopyToClipboard text={value} />
          ) : (
            <p className="text-balance font-medium text-right">{value}</p>
          )}
        </>
      )}
    </div>
  );
};
