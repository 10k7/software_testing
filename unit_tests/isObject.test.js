import isObject from '../src/isObject.js'

test('object input', () => {
    expect(isObject({'a': 1})).toBe(true)
})

test('array with elements input', () => {
    expect(isObject([1,2,3,4])).toBe(true)
})

test('function input', () => {
    expect(isObject(function something(){})).toBe(true)
})

test('null input', () => {
    expect(isObject(null)).toBe(false)
})
