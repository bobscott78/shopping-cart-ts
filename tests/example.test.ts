// tests/example.test.ts

describe('Example TDD Kata', () => {
  it('should return true', () => {
    const result = false; // This is intentionally wrong
    expect(result).toBe(true); // This test will fail
  });
});