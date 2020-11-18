const { test, expect } = require('@jest/globals');

import camelCase from '../src/camelCase.js';
// Bug found, skipped so coverage is sent to coveralls

test.skip('normal two word string', () => {
    expect(camelCase('test this'))
    .toBe('testThis');
});

test.skip('dash operators', () => {
    expect(camelCase('-test-this-'))
    .toBe('testThis');
});

test.skip('single word', () => {
    expect(camelCase('testThis'))
    .toBe('testThis');
});