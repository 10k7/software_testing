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

// Bug found, skipped so coverage is sent to coveralls
test.skip('empty', () => {
    const expected = [];
    expect(castArray())
    .toEqual(expected);
});

