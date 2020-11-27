const { test, expect } = require('@jest/globals');

import map from './src/map.js'
import isEmpty from './src/isEmpty.js'

test('Producer leaves empty fields', () => {

    const productA = [
        "productA",
        '',
        '22-11-2020'
    ]
    const expected = [false, true, false];
    expect(map(productA,isEmpty))
        .toEqual(expected);
});
