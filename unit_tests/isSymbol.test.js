const { test, expect } = require('@jest/globals');

import isSymbol from '../src/isSymbol.js';

test('Symbol iterator', () => {
    const input = Symbol.iterator;
    const expected = true;
    expect(isSymbol(input))
    .toEqual(expected);
});

test('String', () => {
    const input = 'test';
    const expected = false;
    expect(isSymbol(input))
    .toEqual(expected);
});

test('Number', () => {
    const input = 10.1;
    const expected = false;
    expect(isSymbol(input))
    .toEqual(expected);
});