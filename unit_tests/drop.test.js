const { test, expect } = require('@jest/globals');

import drop from '../src/drop.js';

test('Valid array without 2nd parameter', () => {
    const input1 = [1,2,3];
    const expected = [2,3];
    expect(drop(input1))
    .toEqual(expected);
});

test('Valid array with 2nd valid parameter', () => {
    const input1 = [1,2,3];
    const input2 = 2;
    const expected = [3];
    expect(drop(input1, input2))
    .toEqual(expected);
});

test('Valid array with 2nd being higher than array size', () => {
    const input1 = [1,2,3];
    const input2 = 4;
    const expected = [];
    expect(drop(input1, input2))
    .toEqual(expected);
});

test('Valid array with 2nd zero', () => {
    const input1 = [1,2,3];
    const input2 = 0;
    const expected = [1,2,3];
    expect(drop(input1, input2))
    .toEqual(expected);
});

test('Valid array with negative 2nd parameter', () => {
    const input1 = [1,2,3];
    const input2 = -1;
    const expected = [1,2,3];
    expect(drop(input1, input2))
    .toEqual(expected);
});

test('Invalid array', () => {
    const input1 = 'A';
    const input2 = 1;
    const expected = [];
    expect(drop(input1, input2))
    .toEqual(expected);
});