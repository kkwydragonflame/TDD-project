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

    expect(spy).toHaveBeenCalledWith('Rules: You\'ll start with 2 dice. You can roll additional dice, and their results will be added to your total. The goal is to get as close to, but not over, a set Max Score, using as few dice as possible.'
)
})

// test for printing status
// test for printing score
// test for printing menu
// test for printing game options
// test for prompting user for input
// test for displaying error message