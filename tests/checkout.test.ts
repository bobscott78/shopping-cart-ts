import { checkout, total } from '../src/checkout';

describe('Empty Basket', () => {
  it('total should be 0', () => {
    const result = checkout().total();
    expect(result).toBe(0);
  });
});

describe('Single item', () => {
  it('item code A should be 50', () => {
    var c = checkout();
    c.scan('A');
    const total = c.total();
    expect(total).toBe(50);
  })
});