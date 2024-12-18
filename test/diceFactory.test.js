import { DiceFactory } from '../src/js/diceFactory.js'
import { jest, test, expect, beforeEach } from '@jest/globals'

let sut;

beforeEach(() => {
    sut = new DiceFactory()
})

test('should create a 4 sided die', () => {
    testDieCreation('d4', 4)
})

test('should create a 6 sided die', () => {
    testDieCreation('d6', 6)
})

test('should create a 12 sided die', () => {
    testDieCreation('d12', 12)
})

test('should create a 20 sided die', () => {
    testDieCreation('d20', 20)
})

test('should throw error for unknown die type', () => {
    expect(() => {
        const die = sut.createDice('d9')
    }).toThrow('Unknown die type')
})

function testDieCreation(type, sides) {
    const die = sut.createDice(type)
    expect(die.sides).toBe(sides)
}
