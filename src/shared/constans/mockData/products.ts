import { HeadPhoneType, IProduct } from "../../types";
import AppleBYZS852I from "./img/AppleBYZS852I.png";
import AppleEarPods from "./img/AppleEarPods.png";
import AppleEarPods2 from "./img/AppleEarPods2.png";
import AppleAirPods3 from "./img/AppleAirPods3.png";
import GERLAXGH04 from "./img/GERLAXGH-04.png";
import BOROFONEBO4 from "./img/BOROFONEBO4.png";

export const products: IProduct[] = [
  {
    img: AppleBYZS852I,
    title: "Apple BYZ S852I",
    price: 2927,
    oldPrice: 3527,
    rate: 4.7,
    type: HeadPhoneType.wired,
    id: 1,
  },
  {
    img: AppleEarPods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    type: HeadPhoneType.wired,
    id: 2,
  },
  {
    img: AppleEarPods2,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    type: HeadPhoneType.wired,
    id: 3,
  },
  {
    img: AppleBYZS852I,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    type: HeadPhoneType.wired,
    id: 4,
  },
  {
    img: AppleEarPods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    type: HeadPhoneType.wired,
    id: 5,
  },
  {
    img: AppleEarPods2,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    type: HeadPhoneType.wired,
    id: 6,
  },
  {
    img: AppleAirPods3,
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
    type: HeadPhoneType.wireless,
    id: 7,
  },
  {
    img: GERLAXGH04,
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
    type: HeadPhoneType.wireless,
    id: 8,
  },
  {
    img: BOROFONEBO4,
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
    type: HeadPhoneType.wireless,
    id: 9,
  },
];
