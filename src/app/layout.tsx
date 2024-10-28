import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: "Data FY",
  description:
    "Помогаем быстро и эффективно оценить надежность контрагента: защитите бизнес от штрафов, доначислений налогов и недобросовестных партнеров",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-gilroy">
        <Providers>
          <div className="relative flex min-h-screen pb-[calc(430px)] flex-col bg-background">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
