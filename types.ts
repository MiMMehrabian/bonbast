export interface Currency {
  id: string;
  code: string;
  name: string;
  price: string;
  isBull: boolean;
  countryCode: string;
}

export interface Gold {
  id: string;
  type: string;
  price: string;
  isBull: boolean;
}

export interface Coins {
  id: number;
  coinName: string;
  type: string;
  price: number;
  isBull: boolean;
  unit: string;
}
