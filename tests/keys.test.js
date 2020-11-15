const { test, expect } = require('@jest/globals');

import keys from '../src/keys.js';

test('Valid object with keys', () => {
    const input = {'a': 1, 'b': 2};
    const expected = ['a','b'];
    expect(keys(input))
    .toEqual(expected);
});

test('Empty object', () => {
    const input = {};
    const expected = [];
    expect(keys(input))
    .toEqual(expected);
});

test('Invalid parameter', () => {
    const input = 2;
    const expected = [];
    expect(keys(input))
    .toEqual(expected);
});