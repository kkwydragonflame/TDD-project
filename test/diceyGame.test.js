import { DiceyGame } from '../src/js/DiceyGame.js'
import { jest, test, expect, describe, afterEach } from '@jest/globals'

let sut;

describe('DiceyGame constructor tests', () => {
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
})

describe('Game setup tests', () => {
    beforeEach(() => {
        const mockUI = {
            welcome: jest.fn()
        }
        const mockDieFactory = {}
        sut = new DiceyGame(mockUI, mockDieFactory)
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })

    test('should call welcome method on UI', () => {
        sut.setupGame()
        expect(sut.ui.welcome).toHaveBeenCalled()
    })

    test.todo('should call menu method on UI')

    test.todo('should prompt user to choose a die type')

    test.todo('should create a die of the chosen type')
})
