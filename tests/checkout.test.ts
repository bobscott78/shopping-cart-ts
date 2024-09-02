import { total } from '../src/checkout';

describe('Empty Basket', () => {
  it('total should be 0', () => {
    const result = total();
    expect(result).toBe(0);
  });
});