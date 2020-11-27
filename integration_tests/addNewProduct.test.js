import isLength from '../src/isLength.js'
import get from '../src/get.js'
import filter from '../src/filter.js'

test("Adding new item to portal", () => {
    var database = {'food': [ {
        'type':'banana','available':  true, "description": "yellow and healthy, yum"        }
        ],'phones': [{}],
        'car': [{}]
        }

    var food_query = get(database, 'food')
    expect(food_query).toEqual([{
        'type':'banana','available':  true, "description": "yellow and healthy, yum"
    }]) 

    const new_product = "potato"
    const description = "a sweet potato, blbalalblalbalballbalallalblsb"
    const available = true

    if (isLength(description) < 100) {

        const potato_query = filter(food_query, ({type}) => type == new_product)
        expect(potato_query).toEqual([[]])
    
        // When there is no element to be found, it returns an array with a nested array
        if (isLength(potato_query[0]) == 0) {
            database.food.push({'type': new_product, 'available':  available, "description": description})
        }
    }
    expect(database).toEqual({'food': [ {
        'type':'banana','available':  true, "description": "yellow and healthy, yum"},
        {'type':'potato','available':  true, "description": "a sweet potato, blbalalblalbalballbalallalblsb"
        }
        ],'phones': [{}],
        'car': [{}]
        })

})