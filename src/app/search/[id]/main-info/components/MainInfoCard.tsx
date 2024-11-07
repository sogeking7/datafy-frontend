import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "./Tab";
import { FindByBinResponse } from "@/features/company/api/company.service.types";

const keyLabels = {
  bin: "БИН",
  name: "Наименование",
  date_registration: "Дата регистрации",
  legal_address: "Юридический адрес",
  contacts: "Контакты",
  fullname_director: "Руководитель",
  registeringAuthority: "Регистрирующий орган",
  vatPayer: "Плательщик НДС",
  oked_name: "Вид деятельности",
  lastRegistrationDate: "Дата последней регистрации",
  requisites: "Реквизиты",
  krp_name: "Размер предприятия",
  type_of_ownership: "Наименование КФС",
  tax_authority_name: "Код налогового органа",
  hasBlockedAccounts: "Наличие заблокированных счетов",
  bankruptcyInfo: "Сведения о банкротстве",
  inDishonestSuppliersRegistry:
    "Попадание компании в реестр недобросовестных поставщиков",
  kse_name: "Наименование сектора экономики",
  kse_code: "Код сектора экономики",
  krp_code: "Код КРП (с учетом филиалов)",
  oked_code: "Основной код ОКЭД",
  kato_code: "КАТО",
  additional_okeds: "Вторичный код ОКЭД",
} as const;

export const MainInfoCard = ({ data }: { data: FindByBinResponse }) => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle>Основная информация</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        {Object.entries({ ...data.company_info, ...data.tax_info }).map(
          (item, id) => {
            const keyv = keyLabels[item[0] as keyof Object];
            if (!keyv) return null;
            let value = item[1].toString();
            if (item[0] === "date_registration") {
              const date = new Date(value);
              value = date.toLocaleDateString("kk-KZ", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              });
            }
            if (item[0] === "additional_okeds") {
              const parsedOkeds = JSON.parse(value);
              if (parsedOkeds[0]) value = parsedOkeds[0].split(",").join(", ");
              else value = "Нет";
            }
            if (item[0] === "tax_authority_name") {
              value += " - " + data.tax_info.tax_authority_code;
            }
            if (item[0] === "legal_address") {
              value += ", " + data.company_info.judical_address;
            }
            return (
              <Tab
                copyToClickboard={
                  item[0] === "bin" || item[0] === "legal_address"
                    ? true
                    : false
                }
                action={false}
                key={id}
                keyv={keyv}
                value={value}
              />
            );
          }
        )}
      </CardContent>
    </Card>
  );
};
