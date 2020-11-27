import compact from '../src/compact.js';

test.skip('Falsey values: "", false, 0', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
});

test.skip('Falsey values: NaN, undefined, null', () => {
    expect(compact([NaN, undefined, 69, null])).toEqual([69]);
});


test('Empty array', () => {
    expect(compact([])).toEqual([]);
});