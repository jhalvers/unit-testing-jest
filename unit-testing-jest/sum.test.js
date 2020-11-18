const { test, expect } = require('@jest/globals')
const sum = require('./sum')

test('probably adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})