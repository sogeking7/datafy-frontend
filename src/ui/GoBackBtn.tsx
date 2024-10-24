"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const GoBackBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="hover:underline items-center gap-1 flex my-2 text-gray-600"
    >
      <ArrowLeft size={18} />
      Go back
    </button>
  );
};
