import filter from '../src/filter.js';

test('user filtering by activety', () => {
    const users = [
          { 'user': 'barney', 'active': true },
          { 'user': 'fred',   'active': false }
        ]

    expect(filter(users, ({ active }) => active
    )).toStrictEqual([{"active": true, "user": "barney"}])
});

test('in stock filtering', () => {
    var products = [ {'product': 'banana', 'instock': true}, {'product': 'orange', 'instock': true}]
        
    expect(filter(products, ({instock}) => instock
    )).toStrictEqual([ {'product': 'banana', 'instock': true}, {'product': 'orange', 'instock': true}]);
})

test('not in stock filtering', () => {
    var products = [ {'product': 'banana', 'instock': false}, {'product': 'orange', 'instock': false}]
        
    expect(filter(products, ({instock}) => !instock
    )).toStrictEqual([ {'product': 'banana', 'instock': false}, {'product': 'orange', 'instock': false}]);
})