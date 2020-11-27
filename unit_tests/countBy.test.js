import countBy from '../src/countBy.js';

test.skip('Count active users', () => {
    const users = [
           { 'user': 'barney', 'active': true },
           { 'user': 'betty', 'active': true },
           { 'user': 'fred', 'active': false }
         ]
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
});

test("Empty array", () => {
    const users = []
    expect(countBy(users, value => value.active)).toEqual({});
})


test.skip('Undefined activety', () => {
    const users = [
           { 'user': 'barney', 'active': true },
           { 'user': 'betty', 'active': true },
           { 'user': 'fred', 'active': false },
           { 'user': 'benny', 'active': undefined }
         ]
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 , 'undefined': 1});
});


test.skip('Two users with the same name', () => {
    const users = [
           { 'user': 'barney', 'active': true },
           { 'user': 'betty', 'active': true },
           { 'user': 'fred', 'active': false },
           { 'user': 'fred', 'active': true }
         ]
    expect(countBy(users, value => value.active)).toEqual({ 'true': 3, 'false': 1 });
});

