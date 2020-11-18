import isTypedArray from '../src/isTypedArray.js'

test('uint32 typed array input', () => {
    expect(isTypedArray(new Uint32Array())).toBe(true)
})

test('array input', () => {
    expect(isTypedArray([])).toBe(false)
})

test('array with integers input', () => {
    expect(isTypedArray([1,2,3])).toBe(false)
})