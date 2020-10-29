import map from '../src/map.js'

test('sqrt function', () => {
    console.log(Math.sqrt(2))
    expect(map([100,9], Math.sqrt)).toStrictEqual([10, 3])
})

test('power of 2', () => {
    function square(n) {
        return n*n
    }
    expect(map([2,3,-4], square)).toStrictEqual([4,9,16])
})
