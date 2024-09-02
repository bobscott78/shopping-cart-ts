export function checkout(priceList: { [key: string]: number }): any {
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