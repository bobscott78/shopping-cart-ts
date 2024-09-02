export function checkout(): any {
  let total = 0;
  
  return {
    scan: (item: string) => {
      item === 'B' ? total += 30 : total += 50;
    },
    total: () => {
      return total;
    }
  };
}