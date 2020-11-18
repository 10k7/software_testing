import at from '../src/at.js';

test('testing at', () => {
    var object = { 'a' : [1, { 'b': 2}, 3], 'c': 4}
    
    expect(at(object, ['a[0]', 'c', 'a[1].b'])).toStrictEqual([1, 4, 2]);
});

test('get value from empty array', () => {
    expect(at([], ['a'])).toStrictEqual([undefined])
});

test('get value from empty array', () => {
    var object = { 'a' : [1, { 'b': 2}, 3], 'c': 4}
    expect(at(object, [null])).toStrictEqual([undefined]);

});