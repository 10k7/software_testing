const { test, expect } = require('@jest/globals');

import isObjectLike from '../src/isObjectLike.js';

test('Valid object', () => {
    const input = {};
    const expected = true;
    expect(isObjectLike(input))
    .toEqual(expected);
});

test('Invalid object', () => {
    const input = undefined;
    const expected = false;
    expect(isObjectLike(input))
    .toEqual(expected);
});