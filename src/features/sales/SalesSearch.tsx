import Image from "next/image";
import { Button } from "@/components/ui/button";

export const SalesSearch = ({
  size = "large",
}: {
  size?: "large" | "small";
}) => {
  const isLarge = size === "large";

  return (
    <form
      action="/search"
      className={`w-full max-w-4xl bg-white p-2 ${
        isLarge
          ? "md:p-3 rounded-xl md:rounded-2xl gap-2 md:gap-10"
          : "rounded-xl gap-3"
      } flex justify-between`}
    >
      <div className="w-full relative flex items-center">
        <Image
          alt="search"
          className={`absolute ${
            isLarge ? "max-md:size-5 top-2 md:top-3 left-2 md:left-3" : "top-3 left-3"
          }`}
          src="/iconly/search.svg"
          width={isLarge ? 24 : 18}
          height={isLarge ? 24 : 18}
        />
        <input
          name="q"
          className={`${
            isLarge
              ? "pl-10 md:pl-12 h-9 md:h-12 text-sm md:text-lg"
              : "pl-12 h-10 text-base tracking-tighter"
          } bg-transparent border-none ring-none outline-none w-full`}
          placeholder="Введите ИИН, БИН, ФИО, название компании"
        />
      </div>
      <Button
        size={isLarge ? "lg" : undefined}
        className={`${isLarge ? "max-md:hidden min-w-44" : "!px-10"}`}
      >
        Найти
      </Button>
    </form>
  );
};
