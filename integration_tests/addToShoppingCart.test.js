const { test, expect } = require('@jest/globals');

import get from '../src/get.js'
import add from '../src/add.js';

test('Adding price to shopping cart', () => {
    const products = {
        'product' : [
            {
                'info' : {
                    'price' : 100.20
                } 
            }
        ]
    }
    const price = get(products, 'product[0].info.price')
    expect(price)
    .toBe(100.20);

    const shopping_cart = {
        'procucts' : [ 
            {
                'productA' : {
                    'info' : 'asdA',
                    'price' : 100.10
                }
            },
            {
                'productB' : {
                    'info' : 'asdB',
                    'price' : 123.20
                }
            }
        ],
        'total_price' : 223.30
    }
    const total_price = get(shopping_cart, 'total_price');
    expect(add(price, total_price))
        .toBe(323.50);
});
