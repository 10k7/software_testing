const { test, expect } = require('@jest/globals');

import isBuffer from '../src/isBuffer.js';

test('Valid buffer', () => {
    const input = new Buffer.alloc(2);
    const expected = true;
    expect(isBuffer(input))
    .toEqual(expected);
});

test('Invalid buffer', () => {
    const input = new Uint8Array(2);
    const expected = false;
    expect(isBuffer(input))
    .toEqual(expected);
});