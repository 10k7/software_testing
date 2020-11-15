const { test, expect } = require('@jest/globals');

import castArray from '../src/castArray.js';

test('number', () => {
    const expected = [1];
    expect(castArray(1))
    .toEqual(expected);
});

test('string', () => {
    const expected = ['test'];
    expect(castArray('test'))
    .toEqual(expected);
});

test('empty', () => {
    const expected = [];
    expect(castArray())
    .toEqual(expected);
});

