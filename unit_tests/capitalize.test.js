const { test, expect } = require('@jest/globals');

import capitalize from '../src/capitalize.js';

test('Valid uppercase string', () => {
    expect(capitalize('FRIEND'))
    .toBe('Friend');
});

test('Valid lowercase string', () => {
    expect(capitalize('friend'))
    .toBe('Friend');
});

test('Already capitalized string', () => {
    expect(capitalize('Friend'))
    .toBe('Friend');
});

test('Invalid character to uppercase', () => {
    expect(capitalize('&Friend'))
    .toBe('&friend');
});

test('Invalid character to lowercase', () => {
    expect(capitalize('f&%#Nd'))
    .toBe('F&%#nd');
});