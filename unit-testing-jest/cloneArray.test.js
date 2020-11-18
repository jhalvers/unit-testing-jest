const cloneArray = require('./cloneArray')
const sum = require('./cloneArray')

test('probably clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})