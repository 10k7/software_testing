const { test, expect } = require('@jest/globals');

import isDate from '../src/isDate.js';

test('Valid Date', () => {
    const input = new Date();
    const expected = true;
    expect(isDate(input))
    .toEqual(expected);
});

test('Invalid Date', () => {
    const input = 'Tue May 3 2020';
    const expected = false;
    expect(isDate(input))
    .toEqual(expected);
});

test('Invalid type', () => {
    const input = new String();
    const expected = false;
    expect(isDate(input))
    .toEqual(expected);
});