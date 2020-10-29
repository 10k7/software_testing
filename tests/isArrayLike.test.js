import isArrayLike from '../src/isArrayLike.js'

test('array with elements input', () => {
    expect(isArrayLike(['a', 'b', 'c'])).toBe(true)
})

test('html element input', () => {
    expect(isArrayLike(document.body.children)).toBe(true)
})

test('string input', () => {
    expect(isArrayLike('hello')).toBe(true)
})

test('boolean input', () => {
    expect(isArrayLike(true)).toBe(false)
})
