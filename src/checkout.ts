type Checkout = {
  scan: (item: string) => void;
  total: () => number;
};

export function checkout(priceList: { [key: string]: number }): Checkout {
  let total = 0;
  
  return {
    scan: (item: string) => {
      const price =  priceList[item];
      total += price;
    },
    total: () => {
      return total;
    }
  };
}