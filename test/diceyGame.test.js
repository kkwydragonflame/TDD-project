import { DiceyGame } from '../src/js/DiceyGame.js'
import { test, expect } from '@jest/globals'

let sut;

test('should throw exception if no UserInterface is provided', () => {
    expect(() => {
        sut = new DiceyGame()
    }).toThrow('UserInterface is required')
})

test('should throw exception if no DieFactory is provided', () => {
    const mockUI = {}
    expect(() => {
        sut = new DiceyGame(mockUI)
    }).toThrow('DieFactory is required')
})

test('should construct game successfully when both arguments are provided', () => {
    const mockUI = {}
    const mockDieFactory = {}
    sut = new DiceyGame(mockUI, mockDieFactory)
    expect(sut).toBeInstanceOf(DiceyGame)
})
