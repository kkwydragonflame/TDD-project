import { Die } from '../src/js/Die.js'
import { jest, test, expect } from '@jest/globals'

let sut;

beforeEach(() => {
    sut = new Die(12)
})

test('roll should return a number between 1 and 12', () => {
    const result = sut.roll()
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(12)
})
