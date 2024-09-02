export function checkout(): any {
  let total = 0;
  
  return {
    scan: (item: string) => {
      const price =  item === 'B' ? 30 : 50;
      total += price;
    },
    total: () => {
      return total;
    }
  };
}