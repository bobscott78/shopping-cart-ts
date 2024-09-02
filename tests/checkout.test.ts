import { checkout } from '../src/checkout';

const priceList: { [key: string]: number } = {
  "A": 50,
  "B": 30,
};

describe('Empty Basket', () => {
  it('total should be 0', () => {
    const result = checkout(priceList).total();
    expect(result).toBe(0);
  });
});

describe('Single item', () => {
  it('item code A should be 50', () => {
    var c = checkout(priceList);
    c.scan('A');
    const total = c.total();
    expect(total).toBe(50);
  })
});

describe('Two different items', () => {
  it('items AB should total 80', () => {
    var c = checkout(priceList);
    c.scan('A');
    c.scan('B');
    const total = c.total();
    expect(total).toBe(80);
  })
})