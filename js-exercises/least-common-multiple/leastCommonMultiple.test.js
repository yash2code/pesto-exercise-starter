import { leastCommonMultiple } from './leastCommonMultiple';

describe('leastCommonMultiple', () => {
  it('should give correct lcm', () => {
    expect(leastCommonMultiple(6, 21)).toBe(42);
  });
});
