import { checkout } from '../src/checkout';

const priceList: { [key: string]: number } = {
  'A': 50,
  'B': 30,
  'C': 20,
  'D': 15,
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
});

describe('Two same item', () => {
  it('items CC should total 40', () => {
    var c = checkout(priceList);
    c.scan('C');
    c.scan('C');
    const total = c.total();
    expect(total).toBe(40);
  })
});

describe('Apply simple discount', () => {
  it('AAA should total 130', () => {
    var c = checkout(priceList);
    c.scan('A');
    c.scan('A');
    c.scan('A');
    const total = c.total();
    expect(total).toBe(130);
  })
});

describe('Apply discount for another item', () => {
  it('BB should total 45', () => {
    var c = checkout(priceList);
    c.scan('B');
    c.scan('B');
    const total = c.total();
    expect(total).toBe(45);
  })
});

describe('Apply discount twice', () => {
  it('BBBB should total 90', () => {
    var c = checkout(priceList);
    c.scan('B');
    c.scan('B');
    c.scan('B');
    c.scan('B');
    const total = c.total();
    expect(total).toBe(90);
  })
});

