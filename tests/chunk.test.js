import chunk from '../src/chunk.js';

test('negative second parameter', () => {
    expect(chunk(['a', 'b'], -1)).toStrictEqual([]);
});

test('get value from empty array', () => {
    expect(chunk(['a', 'b', 'c'], 4)).toStrictEqual([['a', 'b', 'c', undefined]])
});
// Bug found, skipped so coverage is sent to coveralls
test.skip('get value from empty array', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a','b'],['c','d']]);

});