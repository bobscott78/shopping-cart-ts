type Checkout = {
  scan: (item: string) => void;
  total: () => number;
};

export function checkout(priceList: { [key: string]: number }): Checkout {
  let total = 0, discount = 0;
  const discounts: { [key: string]: { count: number, amount: number } } = {
    'A': {count: 3, amount: 20},
    'B': {count: 2, amount: 15},
  };
  const counts: { [item: string]: number} = {};

  function applyDiscount(item: string) {
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
  }

  return {
    scan: (item: string) => {
      const price =  priceList[item];
      total += price;
      applyDiscount(item);
    },
    total: () => {
      return total - discount;
    }
  };
}