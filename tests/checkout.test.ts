import { Checkout, checkout } from '../src/checkout';
import { discounter } from '../src/discounter';

const priceList: { [key: string]: number } = {
  'A': 50,
  'B': 30,
  'C': 20,
  'D': 15,
};
const discounts: { [key: string]: { count: number, amount: number } } = {
  'A': {count: 3, amount: 20},
  'B': {count: 2, amount: 15},
};

function createCheckout(): Checkout {
  return checkout(priceList, discounter(discounts));
}

describe('Empty Basket', () => {
  it('total should be 0', () => {
    const result = createCheckout().total();
    expect(result).toBe(0);
  });
});

describe('Single item', () => {
  it('item code A should be 50', () => {
    var c = createCheckout();
    c.scan('A');
    const total = c.total();
    expect(total).toBe(50);
  })
});

describe('Two different items', () => {
  it('items AB should total 80', () => {
    var c = createCheckout();
    c.scan('A');
    c.scan('B');
    const total = c.total();
    expect(total).toBe(80);
  })
});

describe('Two same item', () => {
  it('items CC should total 40', () => {
    var c = createCheckout();
    c.scan('C');
    c.scan('C');
    const total = c.total();
    expect(total).toBe(40);
  })
});

describe('Apply simple discount', () => {
  it('AAA should total 130', () => {
    var c = createCheckout();
    c.scan('A');
    c.scan('A');
    c.scan('A');
    const total = c.total();
    expect(total).toBe(130);
  })
});

describe('Apply discount for another item', () => {
  it('BB should total 45', () => {
    var c = createCheckout();
    c.scan('B');
    c.scan('B');
    const total = c.total();
    expect(total).toBe(45);
  })
});

describe('Apply discount twice', () => {
  it('BBBB should total 90', () => {
    var c = createCheckout();
    c.scan('B');
    c.scan('B');
    c.scan('B');
    c.scan('B');
    const total = c.total();
    expect(total).toBe(90);
  })
});

