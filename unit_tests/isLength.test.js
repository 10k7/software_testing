const { test, expect } = require('@jest/globals');

import isLength from '../src/isLength.js';

test('Number which is an integer', () => {
    const input = 2;
    const expected = true;
    expect(isLength(input))
    .toEqual(expected);
});

test('Number minimum which is not an integer', () => {
    const input = Number.MIN_VALUE;
    const expected = false;
    expect(isLength(input))
    .toEqual(expected);
});