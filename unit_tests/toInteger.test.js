const { test, expect } = require('@jest/globals');

import toInteger from '../src/toInteger.js';

test('Normal integer', () => {
    const input = 10;
    const expected = 10;
    expect(toInteger(input))
    .toEqual(expected);
});

test('Smallest value', () => {
    const input = Number.MIN_VALUE;
    const expected = 0;
    expect(toInteger(input))
    .toEqual(expected);
});

test('Infinity', () => {
    const input = Infinity;
    const expected = 1.7976931348623157e+308;
    expect(toInteger(input))
    .toEqual(expected);
});

test('Float', () => {
    const input = 10.1;
    const expected = 10;
    expect(toInteger(input))
    .toEqual(expected);
});

test('Negative number', () => {
    const input = -10.1;
    const expected = -10;
    expect(toInteger(input))
    .toEqual(expected);
});

test('String', () => {
    const input = 'asd';
    const expected = 0;
    expect(toInteger(input))
    .toEqual(expected);
});