import words from '../src/words.js';
import get from '../src/get.js';
import filter from '../src/filter.js';
import toNumber from '../src/toNumber.js';


test.skip("Integration test: search query filtering", () => {
    const query = "phones and food"
    const parsed_query = words(query)
    expect(parsed_query)
        .toStrictEqual(['phones', 'and', 'food'])


    const categories = {
        'phones': [{
            'manufacturer': 'Samsung','model': 'Galaxys','price': '1', 'available': true,
            'manufacturer': 'Samsung','model': 'potato','price': '7', 'available': true,
            'manufacturer': 'Huawei', 'model': 'Mate', 'price': '5','available': false,
            'manufacturer': 'Huawei', 'model': 'p', 'price': '40','available': false,
            'manufacturer': 'OnePlus','model': '7', 'price': '10','available': true,
            'manufacturer': 'OnePlus','model': 't', 'price': '100','available': false
        }],
        'food': [ {
            'type':'banana','available':  true,
            'type':'apple','available': false,
            'type':'orange','available':  false
        }]
    }

    const phones = get(categories, parsed_query[0])

    expect(phones)
        .toStrictEqual([{
            'manufacturer': 'Samsung','model': 'Galaxys','price': '1', 'available': true,
            'manufacturer': 'Samsung','model': 'potato','price': '7', 'available': true,
            'manufacturer': 'Huawei', 'model': 'Mate', 'price': '5','available': false,
            'manufacturer': 'Huawei', 'model': 'p', 'price': '40','available': false,
            'manufacturer': 'OnePlus','model': '7', 'price': '10','available': true,
            'manufacturer': 'OnePlus','model': 't', 'price': '100','available': false
        }])



    const price_available_under = filter(phones_available, ({price, available}) => toNumber(price) < 10 && available)
    expect(price_available_under).toStrictEqual(
        [{
            'manufacturer': 'Samsung','model': 'Galaxys','price': '1', 'available': true,
            'manufacturer': 'Samsung','model': 'potato','price': '7', 'available': true,
        }]
    )
})