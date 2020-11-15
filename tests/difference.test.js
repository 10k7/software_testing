const { test, expect } = require('@jest/globals');

import difference from '../src/difference.js';

test('Same arrays', () => {
    const input1 = [1,2,3];
    const input2 = [1,2,3]; 
    const expected = [];
    expect(difference(input1, input2))
    .toEqual(expected);
});

test('One cell difference', () => {
    const input1 = [1,2];
    const input2 = [1,3]; 
    const expected = [2];
    expect(difference(input1, input2))
    .toEqual(expected);
});

test('Every cell different', () => {
    const input1 = [1,2,3];
    const input2 = [4,5,6]; 
    const expected = [1,2,3];
    expect(difference(input1, input2))
    .toEqual(expected);
});

test('One empty array', () => {
    const input1 = [1,2,3];
    const input2 = []; 
    const expected = [1,2,3];
    expect(difference(input1, input2))
    .toEqual(expected);
});