export interface IBaseProduct {
  img: string;
  title: string;
  price: number;
  id: number;
}

export interface IProduct extends IBaseProduct {
  rate: number;
  type: HeadPhoneType;
  oldPrice?: number;
}

export interface ICartProduct extends IBaseProduct {
  count: number;
}

export enum HeadPhoneType {
  wireless = "wireless",
  wired = "wired",
}
