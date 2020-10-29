import clamp from '../src/clamp.js';

test('normal operation', () => {
    expect(clamp(100, 50, 25)).toBe(50);
});

test('same lower and upper bound', () => {
    expect(clamp(100, 100, 10)).toBe(100);
});


test('normal operation', () => {
    expect(clamp(10,20,30)).toBe(20);
});

test('null and undefined test', () => {
    expect(clamp(null, undefined, NaN)).toBe(0);
});
