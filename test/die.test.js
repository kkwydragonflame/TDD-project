import { Die } from '../src/js/Die.js'
import { jest, test, expect, describe } from '@jest/globals'

let sut;

describe('Testing 12 sided die', () => {
    beforeEach(() => {
        sut = new Die(12)
    })

    test('roll should return a number between 1 and 12', () => {
        const result = sut.roll()
        expect(result).toBeGreaterThanOrEqual(1)
        expect(result).toBeLessThanOrEqual(12)
    })
})

describe('Testing 20 sided die', () => {
    beforeEach(() => {
        sut = new Die(20)
    })

    test('roll should return a number between 1 and 20', () => {
        const result = sut.roll()
        expect(result).toBeGreaterThanOrEqual(1)
        expect(result).toBeLessThanOrEqual(20)
    })
})
