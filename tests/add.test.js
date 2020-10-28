const { test, expect } = require('@jest/globals');

import add from '../src/add.js';

test('At border 0', () => {
    expect(add(0,0))
        .toBe(0);
});
it('add 1 and 1', () => {
    expect(1 + 1)
      .toBe(2)
      .toBeGreaterThan(1)
      .toBeLessThan(3);
});