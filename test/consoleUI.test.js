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

test('should print rules to console', () => {
    const spy = jest.spyOn(console, 'log')

    sut.rules()

    expect(spy).toHaveBeenCalledWith('Rules: You\'ll start with 2 dice. You can roll additional dice, and their results will be added to your total.\n The goal is to get as close to, but not over, a set Max Score, using as few dice as possible.'
)
})

test('should print menu options to console', () => {
    const spy = jest.spyOn(console, 'log')

    sut.menu()

    expect(spy).toHaveBeenCalledWith('1. Start Game')
    expect(spy).toHaveBeenCalledWith('2. Read Rules')
    expect(spy).toHaveBeenCalledWith('3. High Scores')
    expect(spy).toHaveBeenCalledWith('4. Exit')
})

test.todo('should print status to console')
test.todo('should print score to console')
test.todo('should prompt user for input')
test.todo('should display error message')
test.todo('should clear console')
test.todo('should exit program')
