import reduce from '../src/reduce.js'

test('sum elements', () => {
    expect(reduce([1,2,3], (sum, n )  => {return sum + n})).toBe(6)
})