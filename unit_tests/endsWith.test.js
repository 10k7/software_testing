import endsWith from '../src/endsWith.js';

test('Last character is c', () => {
    expect(endsWith('abc', 'c')).toBe(true)
})

test('Last character is b', () => {
    expect(endsWith('abc', 'b')).toBe(false)
})

test('Second character is b', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true)
})

test.skip('Out of range index', () => {
    expect(endsWith('abc', 'c', 100)).toBe(false)
})

test('Negative index', () => {
    expect(endsWith('abc', 'c', -1)).toBe(false)
})

test('NaN index', () => {
    expect(endsWith('abc', 'c', NaN)).toBe(false)
})