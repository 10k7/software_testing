const { test, expect } = require('@jest/globals');

import get from '../src/get.js'
import ceil from '../src/ceil.js';

test('Two decimal accuracy in prices', () => {
    const products = {
        'product' : [
            {
                'info' : {
                    'price' : 100.20123
                } 
            }
        ]
    }
    const price = get(products, 'product[0].info.price')
    expect(price)
    .toBe(100.20123);

    expect(ceil(price, 2))
    .toBe(100.21);



});
