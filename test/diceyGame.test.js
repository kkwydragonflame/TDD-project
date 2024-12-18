import { DiceyGame } from '../src/js/DiceyGame.js'
import { test, expect } from '@jest/globals'

let sut;

test('should throw exception if no UserInterface is provided', () => {
    expect(() => {
        sut = new DiceyGame()
    }).toThrow('UserInterface is required')
})