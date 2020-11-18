import get from "../src/get.js"

test('normal operation',() => {
    var object = { 'a' : [1, { 'b': 2}, 3], 'c': 4}
    expect(get(object, ['a', '0'])).toBe(1)
})

test('string retrieval value',() => {
    var object = { 'a' : [1, { 'b': 2}, 3], 'c': 4}
    expect(get(object, ['a[1].b', 'something'])).toBe(undefined)
})

test('null retrieval value',() => {
    var object = { 'a' : [1, { 'b': 2}, 3], 'c': 4}
    expect(get(object, ['a[1].b', null])).toBe(undefined)
})