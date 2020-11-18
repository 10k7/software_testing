import toNumber from '../src/toNumber.js'

test('floating point number', () => {
    expect(toNumber(6.9)).toBe(6.9)
})

test('string which represents a number', () => {
    expect(toNumber('6.9')).toBe(6.9)
})

test('infinity', () => {
    expect(toNumber(Infinity)).toBe(Infinity)
})

test('max value', () => {
    expect(toNumber(Number.MAX_VALUE)).toBe(1.7976931348623157e+308)
})

test('null', () => {
    expect(toNumber(null)).toBe(0)
})

test('boolean', () => {
    expect(toNumber(true)).toBe(1)
})