import { bouncer } from './bouncer';

describe('bouncer', () => {
  it('should remove falsy values from array', () => {
    expect(bouncer([false, null, 0, NaN, undefined, '', 9])).toEqual([9]);
  });
});
