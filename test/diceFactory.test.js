import { DiceFactory } from '../src/js/diceFactory.js'
import { jest, test, expect, beforeEach } from '@jest/globals'

let sut;

beforeEach(() => {
    sut = new DiceFactory()
})

test('should create a 6 sided die', () => {
    const die = sut.createDice('d6')

    expect(die.sides).toBe(6)
})

test('should create a 12 sided die', () => {
    const die = sut.createDice('d12')

    expect(die.sides).toBe(12)
})
