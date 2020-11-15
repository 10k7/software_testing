const { test, expect } = require('@jest/globals');

import eq from '../src/eq.js';

test('Two same objects', () => {
    const input = Object;
    const input2 = Object;
    const expected = true;
    expect(eq(input, input2))
    .toEqual(expected);
});

test('Two different objects', () => {
    const input = Object;
    const input2 = String;
    const expected = false;
    expect(eq(input, input2))
    .toEqual(expected);
});