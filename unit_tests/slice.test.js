import slice from '../src/slice.js'

test('slice from the middle', () => {
    expect(slice([0,1,2,3,4,5,6,7,8,9], 5)).toStrictEqual([5,6,7,8,9])
})

test('slice with negative integer', () => {
    expect(slice([0,1,2,3,4,5,6,7,8,9], -1)).toStrictEqual([9])
})

test('null slicer', () => {
    expect(slice([0,1,2,3,4,5,6,7,8,9], null)).toStrictEqual([0,1,2,3,4,5,6,7,8,9])
})