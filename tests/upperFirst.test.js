const { test, expect } = require('@jest/globals');

import upperFirst from '../src/upperFirst.js';

test('lowercase string', () => {
    const input = 'asd';
    const expected = 'Asd';
    expect(upperFirst(input))
    .toEqual(expected);
});

test('uppercase string', () => {
    const input = 'ASD';
    const expected = 'ASD';
    expect(upperFirst(input))
    .toEqual(expected);
});

test('Non-alphabet first letter string', () => {
    const input = '1asd';
    const expected = '1asd';
    expect(upperFirst(input))
    .toEqual(expected);
});