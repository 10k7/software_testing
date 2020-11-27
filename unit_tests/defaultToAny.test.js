import defaultToAny from '../src/defaultToAny.js';

test('All integers', () => {
    expect(defaultToAny(1, 10, 20)).toBe(1);
});

test('Bad value: undefined', () => {
    expect(defaultToAny(undefined, 10, 20)).toBe(10);
});

test('Bad value: undefined, null', () => {
    expect(defaultToAny(undefined, null, 20)).toBe(20);
});

test('Bad value: undefined, null, NaN', () => {
    expect(defaultToAny(undefined, null, NaN)).toBe(NaN);
});