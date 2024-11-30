import React from "react";
import { KBKRecords } from "@/features/company/api/company.service.types";
import { formatKZT, getUniqueColor } from "@/lib/utils";

export function ChartKBKRecords({ data }: { data: KBKRecords }) {
  let chartData = Object.entries(data).map(
    ([name, { kbk, amount, percent }], idx) => ({
      name,
      amount,
      percent,
      kbk,
      color: getUniqueColor(idx),
    })
  );

  chartData.sort((a, b) => b.percent - a.percent);

  const first = chartData[0];

  return (
    <div className="w-full">
      <div className="font-semibold text-lg mb-0 pl-1">
        {first.percent + " %"}
      </div>
      <div className="flex h-10 w-full rounded-lg overflow-hidden border border-gray-200">
        {chartData.map((item, idx) => (
          <div
            key={idx}
            className="h-full"
            style={{
              width: `${item.percent}%`,
              backgroundColor: item.color,
            }}
            title={`${item.name}: ${item.percent}%`}
          ></div>
        ))}
      </div>
      <div className="mt-4 text-sm font-medium">
        <p className="flex items-center gap-3">
          <span
            className="min-w-4 min-h-4 w-4 h-4 rounded-full"
            style={{ backgroundColor: first.color }}
          ></span>
          Сумма КБК
        </p>
        <p className="mt-2 text-base font-semibold">
          {formatKZT(first.amount)}
        </p>
        <p className="mt-4">Коды бюджетной классификации (КБК)</p>
        <p className="mt-2">{first.kbk + " - " + first.name}</p>
      </div>
    </div>
  );
}
