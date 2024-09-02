import { Discounter } from "./discounter";

export type Checkout = {
  scan: (item: string) => void;
  total: () => number;
};

export function checkout(priceList: { [key: string]: number }, discounter: Discounter): Checkout {
  let total = 0;
  
  return {
    scan: (item: string) => {
      const price =  priceList[item];
      total += price;
      discounter.applyDiscount(item);
    },
    total: () => {
      return total - discounter.total();
    },
  };
}