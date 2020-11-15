const { test, expect } = require('@jest/globals');

import camelCase from '../src/camelCase.js';

test('normal two word string', () => {
    expect(camelCase('test this'))
    .toBe('testThis');
});

test('dash operators', () => {
    expect(camelCase('-test-this-'))
    .toBe('testThis');
});

test('single word', () => {
    expect(camelCase('testThis'))
    .toBe('testThis');
});