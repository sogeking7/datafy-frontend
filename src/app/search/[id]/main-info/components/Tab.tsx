import DangerCirlcle from "@/../public/iconly/Light/Danger Circle.svg";
import { ChevronRight } from "lucide-react";

type TabProps = {
  keyv: string | any;
  value: string;
  action: boolean;
  onClick?: () => void;
} & ( // Conditional type: onClick is required if action is true
  | { action: true; onClick: () => void }
  | { action: false; onClick?: undefined }
);

export const Tab = ({ keyv, value, action, onClick }: TabProps) => {
  return (
    <div className="bg-gray-100 flex justify-between flex-wrap rounded-xl px-4 py-3 text-sm">
      <div className="flex gap-3 items-center">
        <DangerCirlcle className="full-current stroke-gray-400 stroke-[1.5]" />
        <span className="font-semibold">{keyv}</span>
      </div>
      {action ? (
        <button>
          <ChevronRight />
        </button>
      ) : (
        <span className="font-semibold">{value}</span>
      )}
    </div>
  );
};
