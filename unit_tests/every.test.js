const { test, expect } = require('@jest/globals');

import every from '../src/every.js';

test('All elements comply with predicate', () => {
    const input = [false, true, true];
    const input2 = (parameter) =>  parameter === true || parameter === false;
    const expected = true;
    expect(every(input, input2))
    .toEqual(expected);
});

test('Last element is falsy', () => {
    const input = [true, true, null];
    const input2 = (parameter) =>  parameter === true || parameter === false;
    const expected = false;
    expect(every(input, input2))
    .toEqual(expected);
});

test('Empty array', () => {
    const input = [];
    const input2 = (parameter) =>  parameter === true || parameter === false;
    const expected = true;
    expect(every(input, input2))
    .toEqual(expected);
});