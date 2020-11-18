import clamp from '../src/clamp.js';

test('normal operation', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
});

test('same lower and upper bound', () => {
    expect(clamp(10, 100, 100)).toBe(100);
});


test('normal operation', () => {
    expect(clamp(10, -5, 5)).toBe(5);
});

test('null and undefined test', () => {
    expect(clamp(null, undefined, NaN)).toBe(0);
});
