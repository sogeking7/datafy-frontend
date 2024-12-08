import { SearchCard } from "@/features/search/components/SearchCard";
import { Counterparty } from "@/types";
const mock: Counterparty[] = [
  {
    id: 48526,
    biin: "150540007522",
    name: 'ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ЖИЛСТРОЙ РЕКОРД"',
    oked_code: "41201",
    oked_name: "Строительство жилых зданий",
    additional_okeds: ["56299"],
    date_registration: "2015-05-13",
    krp_code: "105",
    krp_name: "Малые предприятия (<= 5) (от 0 до 5 чел.)",
    kse_code: "1122",
    kse_name: "Национальные частные нефинансовые корпорации – ОПП",
    type_of_ownership:
      "Собственность предприятий без государственного и  иностранного участия",
    fullname_director: "СМАКОВ АСХАН БЕЙСЕНБЕКҰЛЫ",
    kato_code: "196847100",
    legal_address:
      "АЛМАТИНСКАЯ ОБЛАСТЬ, ИЛИЙСКИЙ РАЙОН, БАЙСЕРКЕНСКИЙ С.О., С.БАЙСЕРКЕ",
    judical_address: "УЛИЦА САТПАЕВА, 7 A",
    type: "companies",
  },
  {
    id: 28187,
    biin: "130840008852",
    name: 'ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ASIA GRUP COMPANY"',
    oked_code: "46909",
    oked_name:
      "Оптовая торговля широким ассортиментом товаров без какой-либо конкретизации",
    additional_okeds: [],
    date_registration: "2013-08-12",
    krp_code: "105",
    krp_name: "Малые предприятия (<= 5) (от 0 до 5 чел.)",
    kse_code: "1122",
    kse_name: "Национальные частные нефинансовые корпорации – ОПП",
    type_of_ownership:
      "Собственность предприятий без государственного и  иностранного участия",
    fullname_director: "ЛАТЫПОВ СЕРГЕЙ ЛЬВОВИЧ",
    kato_code: "151011100",
    legal_address: "АКТЮБИНСКАЯ ОБЛАСТЬ, АКТОБЕ Г.А., Г.АКТОБЕ, РАЙОН АСТАНА ",
    judical_address: "МИКРОРАЙОН 11, 22 A",
    type: "companies",
  },
  {
    id: 5585,
    biin: "161140008052",
    name: 'ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "АУЫЛ ШАРУАШЫЛЫҚ ӨНІМДЕР"',
    oked_code: "46909",
    oked_name:
      "Оптовая торговля широким ассортиментом товаров без какой-либо конкретизации",
    additional_okeds: [],
    date_registration: "2016-11-08",
    krp_code: "105",
    krp_name: "Малые предприятия (<= 5) (от 0 до 5 чел.)",
    kse_code: "1122",
    kse_name: "Национальные частные нефинансовые корпорации – ОПП",
    type_of_ownership:
      "Собственность совместных предприятий с иностранным участием",
    fullname_director: "БУЛЕКБАЕВ КУАНДЫК МУХАМЕТКАРИМОВИЧ",
    kato_code: "101010000",
    legal_address: "ОБЛАСТЬ АБАЙ, СЕМЕЙ Г.А., Г.СЕМЕЙ",
    judical_address: "УЛИЦА ДЖАНГИЛЬДИНА, 84 a",
    type: "companies",
  },
];
export const ViewHistoryList = () => {
  return (
    <ul className="flex flex-col gap-3">
      {mock.map((v, idx) => (
        <SearchCard data={v} key={idx} />
      ))}
    </ul>
  );
};
