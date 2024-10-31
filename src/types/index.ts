export type User = {};

export type Counterparty = {
  title: string;
  type: "individual" | "individual-entrepreneur" | "legal-entity";
  data: string;
  author: string;
  map: string;
  current_type: string;
  country_name: string;
  country_code: string;
  date: string;
};
