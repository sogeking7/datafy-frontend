import React from "react";
import { Counterparty } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab } from "./Tab";

const mockData = {
  bin: "971240001315",
  registrationDate: "04-12-1997",
  legalAddress: "",
  contacts: "",
  director: "МИРОНОВ ПАВЕЛ ВЛАДИМИРОВИЧ",
  registeringAuthority:
    "Управление регистрации филиала НАО ГК «Правительство для граждан» по городу Алматы",
  vatPayer: "Да",
  activityType: 3,
  lastRegistrationDate: "04-12-1997",
  requisites: "",
  companySize: "Крупные предприятия (>1000)",
  ownershipType: "Частная собственность",
  taxOfficeCode: "НК МФ РК — 0101",
  hasBlockedAccounts: "Нет",
  bankruptcyInfo: "Нет",
  inDishonestSuppliersRegistry: "Нет",
} as const;

const keyLabels = {
  bin: "БИН",
  registrationDate: "Дата регистрации",
  legalAddress: "Юридический адрес",
  contacts: "Контакты",
  director: "Руководитель",
  registeringAuthority: "Регистрирующий орган",
  vatPayer: "Плательщик НДС",
  activityType: "Вид деятельности",
  lastRegistrationDate: "Дата последней регистрации",
  requisites: "Реквизиты",
  companySize: "Размер предприятия",
  ownershipType: "Форма собственности",
  taxOfficeCode: "Код налогового органа",
  hasBlockedAccounts: "Наличие заблокированных счетов",
  bankruptcyInfo: "Сведения о банкротстве",
  inDishonestSuppliersRegistry:
    "Попадание компании в реестр недобросовестных поставщиков",
} as const;

export const MainInfoCard = ({ data }: { data?: Counterparty }) => {
  return (
    <Card className="bg-white !rounded-2xl flex flex-col border-none">
      <CardHeader>
        <CardTitle>Основная информация</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 !pt-0">
        {Object.entries(mockData).map((item, id) => (
          <Tab
            action={false}
            key={id}
            keyv={keyLabels[item[0] as keyof Object]}
            value={item[1].toString()}
          />
        ))}
      </CardContent>
    </Card>
  );
};
