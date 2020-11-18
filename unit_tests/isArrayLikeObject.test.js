const { test, expect } = require('@jest/globals');

import isArrayLikeObject from '../src/isArrayLikeObject.js';

test('Valid array', () => {
    const input = [1,2,3,4];
    const expected = true;
    expect(isArrayLikeObject(input))
    .toEqual(expected);
});

test('string', () => {
    const input = 'asd';
    const expected = false;
    expect(isArrayLikeObject(input))
    .toEqual(expected);
});

test('Array part of the document', () => {
    const input = document.body.children;
    const expected = true;
    expect(isArrayLikeObject(input))
    .toEqual(expected);
});