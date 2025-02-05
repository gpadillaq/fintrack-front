export enum Currencies {
  USD = 'USD',
  NIO = 'NIO',
}

export interface BaseReport {
  title: string;
  currency: Currencies | string;
  rangeOfDate: Date[] | string[];
  data: BaseData[];
}

export interface BaseData {
  title: string | string[];
  amount: number | number[];
  details: BaseRow[];
}

export interface BaseRow {
  id?: number | string;
  title: string | string[];
  date?: Date;
  amount: number | number[];
}
