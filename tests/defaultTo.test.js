const { test, expect } = require('@jest/globals');

import defaultTo from '../src/defaultTo.js';

test('Valid value', () => {
    const input1 = 1;
    const input2 = 10; 
    const expected = 1;
    expect(defaultTo(input1, input2))
    .toEqual(expected);
});

test('null value', () => {
    const input1 = null;
    const input2 = 10; 
    const expected = 10;
    expect(defaultTo(input1, input2))
    .toEqual(expected);
});

test('NaN value', () => {
    const input1 = NaN;
    const input2 = 10; 
    const expected = 10;
    expect(defaultTo(input1, input2))
    .toEqual(expected);
});

test('undefined', () => {
    const input1 = undefined;
    const input2 = 10; 
    const expected = 10;
    expect(defaultTo(input1, input2))
    .toEqual(expected);
});

test('null default value', () => {
    const input1 = undefined;
    const input2 = null; 
    const expected = null;
    expect(defaultTo(input1, input2))
    .toEqual(expected);
});