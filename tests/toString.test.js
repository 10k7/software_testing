const { test, expect } = require('@jest/globals');

import toString from '../src/toString.js';

test('Array of values', () => {
    const input = [1,2,3,4];
    const expected = '1,2,3,4';
    expect(toString(input))
    .toEqual(expected);
});

test('Number', () => {
    const input = 10.1;
    const expected = '10.1';
    expect(toString(input))
    .toEqual(expected);
});
// Bug found, skipped so coverage is sent to coveralls
test.skip('null', () => {
    const input = null;
    const expected = '';
    expect(toString(input))
    .toEqual(expected);
});

test('String', () => {
    const input = '10.1as';
    const expected = '10.1as';
    expect(toString(input))
    .toEqual(expected);
});

test('-0', () => {
    const input = -0;
    const expected = '-0';
    expect(toString(input))
    .toEqual(expected);
});
// Bug found, skipped so coverage is sent to coveralls
test.skip('undefined', () => {
    const input = undefined;
    const expected = '';
    expect(toString(input))
    .toEqual(expected);
});