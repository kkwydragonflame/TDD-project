import { ConsoleUI } from '../src/js/ConsoleUI.js'
import { jest, test, expect, beforeEach } from '@jest/globals'

let sut;

beforeEach(() => {
    sut = new ConsoleUI()
})

test('should print welcome message to console', () => {
    const spy = jest.spyOn(console, 'log')

    sut.welcome()

    expect(spy).toHaveBeenCalledWith('Welcome to Dicey!')
})