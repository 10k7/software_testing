import isBoolean from '../src/isBoolean.js'

test('false value', () => {
    expect(isBoolean(false)).toBe(true)
})

test('null value', () => {
    expect(isBoolean(null)).toBe(false)
})

test('interger value', () => {
    expect(isBoolean(1)).toBe(false)
})