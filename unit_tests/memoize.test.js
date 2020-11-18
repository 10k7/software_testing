const { test, expect } = require('@jest/globals');

import memoize from '../src/memoize.js';

test('Change object between calls', () => {
    let input = {'a':1, 'b':2};
    let input2 = { 'c': 3, 'd': 4 }
    const expected = [1,2];

    const values = memoize( (parameter) => { return Object.values(parameter); })
    values(input);

    expect(values(input))
    .toEqual(expected);

    input['a'] = 2;

    expect(values(input))
    .toEqual(expected);
});

test('Check that cache is updated', () => {
    let input = {'a':1, 'b':2};
    let input2 = { 'c': 3, 'd': 4 }
    let expected = [1,2];

    const values = memoize( (parameter) => { return Object.values(parameter); })
    values(input);

    expect(values(input))
    .toEqual(expected);

    input['a'] = 2;

    expect(values(input))
    .toEqual(expected);

    values.cache.set(input, ['a', 'b']);
    expected = ['a', 'b'];
    expect(values(input))
    .toEqual(expected);


});