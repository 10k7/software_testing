const { test, expect } = require('@jest/globals');

import isArguments from '../src/isArguments.js';

test('valid arguments', () => {
    const input = function() { return arguments }();
    const expected = true;
    expect(isArguments(input))
    .toEqual(expected);
});

test('random array', () => {
    const input = ['a','s','d'];
    const expected = false;
    expect(isArguments(input))
    .toEqual(expected);
});