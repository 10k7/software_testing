import divide from '../src/divide.js';

test('divide by zero', () => {
    expect(divide(1,0)).toBe(NaN);
});

test('two negative numbers', () => {
    expect(divide(-1,-1)).toBe(1);
});

test('normal operation', () => {
    expect(divide(-1,-2)).toBe(1);
});

test('invalid input', () => {
    expect(divide(1,'hello world')).toBe(NaN);
});

test('infinity divide by inifnity', () => {
    expect(divide(Infinity, Infinity)).toBe(NaN);
});