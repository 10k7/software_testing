import isEmpty from '../src/isEmpty.js'

test('null input', () => {
    expect(isEmpty(null)).toBe(true)
})

test('boolean input', () => {
    expect(isEmpty(true)).toBe(true)
})

test('interger input', () => {
    expect(isEmpty(1)).toBe(true)
})

test('string input', () => {
    expect(isEmpty("hello world")).toBe(false)
})

test('empty array input', () => {
    expect(isEmpty([])).toBe(true)
})

test('array with elements input', () => {
    expect(isEmpty(['a', 'b', 'c'])).toBe(false)
})