const { test, expect } = require('@jest/globals');

import endsWith from '../src/endsWith.js'
import capitalize from '../src/capitalize.js'
import words from '../src/words.js'
import map from '../src/map.js'
import upperFirst from '../src/upperFirst.js'

test('Uniform product descriptions', () => {
    const description = "this is a product description. this should look like all the other ones.";
    // Words doesn't keep punctuation marks
    //const splitWords = words(description);
    const splitWords = description.split(' ');

    const withPeriods = map(splitWords, function(word) {return endsWith(word, '.')});
    
    const newWords = [];
    // How to have const boolean state change effect in functional language??
    let nextIsCapital = false;
    for( const [index, value] of withPeriods.entries()) {        
        if(nextIsCapital) {
            newWords.push(capitalize(splitWords[index]));
            nextIsCapital = false;
        } else {
            newWords.push(splitWords[index]);
        }

        if( value === true && splitWords[index + 1] !== undefined) {
            nextIsCapital = true;
        }   
    }
    const newDescription = upperFirst(newWords.join(' '));

    expect(newDescription)
    .toBe("This is a product description. This should look like all the other ones.");

});
