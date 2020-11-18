const { test, expect } = require('@jest/globals')
const subtract = require('./subtract')

test('probably subtracts two numbers', () => {
    expect(subtract(1, 2)).toBe(-1)
})