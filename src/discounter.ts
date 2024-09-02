export type Discounter = {
  applyDiscount: (item: string) => void;
  total: () => number;
};

export function discounter(discounts: { [key: string]: { count: number, amount: number } } ): Discounter {
  const counts: { [item: string]: number} = {};
  let discount = 0;
  
  return {
    applyDiscount: (item: string) => {
      if (counts[item]) {
        counts[item]++;
      }
      else {
        counts[item] = 1;
      }
      if (discounts[item] && counts[item] == discounts[item].count) {
        discount += discounts[item].amount;
        counts[item] = 0;
      }
    },
    total: () => {
      return discount;
    }, 
  };
};