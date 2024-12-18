import { Die } from '../src/js/Die.js'
import { jest, test, expect, describe } from '@jest/globals'

let sut;

describe('Testing 4 sided die', () => {
    beforeEach(() => {
        sut = new Die(4)
    })

    test('roll should return a number between 1 and 4', () => {
        const result = sut.roll()
        assertMaxMinValues(result, 1, 4)
    })
})

describe('Testing 12 sided die', () => {
    beforeEach(() => {
        sut = new Die(12)
    })

    test('roll should return a number between 1 and 12', () => {
        const result = sut.roll()
        assertMaxMinValues(result, 1, 12)
    })
})

describe('Testing 20 sided die', () => {
    beforeEach(() => {
        sut = new Die(20)
    })

    test('roll should return a number between 1 and 20', () => {
        const result = sut.roll()
        assertMaxMinValues(result, 1, 20)
    })
})

test('should produce varying results on multiple rolls', () => {
    const diceSizes = [4, 6, 12, 20]
    diceSizes.forEach(size => {
        const sut = new Die(size)
        const results = new Set()
        for (let i = 0; i < 50; i++) {
            results.add(sut.roll())
        }
        expect(results.size).toBeGreaterThan(1)
    })
})

function assertMaxMinValues(result, min, max) {
    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThanOrEqual(max)
}
