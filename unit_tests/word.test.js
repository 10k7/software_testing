import words from '../src/words.js'

test('regular string', () => {
    expect(words('hello world, it’s me & you')).toStrictEqual(['hello', 'world', 'it’s', 'me', 'you'])
})

test('string with regular expression second parameter', () => {
    expect(words('hello world, it’s me & you', /[^, ]+/g)).toStrictEqual(['hello', 'world', 'it’s', 'me', '&', 'you'])
})

test('empty string', () => {
    expect(words('')).toStrictEqual([])
})

test('null input', () => {
    expect(() => {return words(null)} ).toThrow(TypeError)
})