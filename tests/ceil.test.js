const { test, expect } = require('@jest/globals');

import ceil from '../src/ceil.js';

test('Valid value', () => {
    const input = 1.2;
    const expected = 2;
    expect(ceil(input))
    .toEqual(expected);
});

test('Valid value with second parameter', () => {
    const input1 = 1.21;
    const input2 = 1;
    const expected = 1.3;
    expect(ceil(input1, input2))
    .toEqual(expected);
});

test('Valid value with rounding higher than value itself', () => {
    const input1 = 1234;
    const input2 = -5;
    const expected = 100000;
    expect(ceil(input1, input2))
    .toEqual(expected);
});

test('Valid value with second negative parameter', () => {
    const input1 = 1234;
    const input2 = -1;
    const expected = 1240;
    expect(ceil(input1, input2))
    .toEqual(expected);
});

test('At max border', () => {
    const input1 = Number.MAX_VALUE;
    const expected = Number.MAX_VALUE;
    expect(ceil(input1))
    .toEqual(expected);
});

test('At max border with negative second parameter', () => {
    const input1 = Number.MAX_VALUE - 1;
    const input2 = -1; 
    const expected = Number.MAX_VALUE;
    expect(ceil(input1, input2))
    .toEqual(expected);
});