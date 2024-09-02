export function checkout(): any {
  let total = 0;
  
  return {
    scan: () => {
      total += 50;
    },
    total: () => {
      return total;
    }
  };
}