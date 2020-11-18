const { test, expect } = require('@jest/globals');

import add from '../src/add.js';

test('At border 0', () => {
    expect(add(0,0))
        .toBe(0);
});

test('Valid positive value', () => {
    expect(add(1.0, 2.0))
    .toBe(3.0);
});

test('Valid negative value', () => {
    expect(add(-1, -1))
    .toBe(-2);
});

test('Almost at the border', () => {
    expect(add(Number.MAX_SAFE_INTEGER-2, 1))
    .toBe(Number.MAX_SAFE_INTEGER-1);
});

test('At the border', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 0))
    .toBe(Number.MAX_SAFE_INTEGER);
});

test('Over a safe range', () => {
    expect(add(Number.MAX_VALUE-1, Number.MAX_VALUE-1))
    .toBe(Infinity);
});