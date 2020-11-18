import divide from '../src/divide.js';

test('divide by zero', () => {
    expect(divide(1,0)).toBe(NaN);
});

test('two negative numbers', () => {
    expect(divide(-1,-1)).toBe(1);
});

test('return floating point number', () => {
    expect(divide(-1,-2)).toBe(0.5);
});

test('invalid input', () => {
    expect(divide(1,'hello world')).toBe(NaN);
});

test('divide infinity by inifnity', () => {
    expect(divide(Infinity, Infinity)).toBe(NaN);
});