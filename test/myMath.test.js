import { MyMath } from '../src/js/MyMath.js'
import { test, expect, beforeEach } from '@jest/globals'

let sut;

beforeEach(() => {
    sut = new MyMath();
})

test('should return sum of two positive numbers', () => {
    const actual = sut.add(7, 3)

    expect(actual).toEqual(10)
})

test('should return sum of two negative numbers', () => {
    const actual = sut.add(-7, -8)

    expect(actual).toEqual(-15)
})

test('exception expected on invalid input', () => {
    expect(() => {
        sut.add('String', 4)
    }).toThrow('Invalid: Input is not a number')
})

test('should return the difference of two numbers', () => {
    const actual = sut.subtract(10, 4)

    expect(actual).toEqual(6)
})

test('should return difference of two negative numbers', () => {
    const actual = sut.subtract(-5, -7)

    expect(actual).toEqual(2)
})

test('exception expected on invalid input', () => {
    expect(() => {
        sut.subtract('String', 5)
    }).toThrow('Invalid: Input is not a number')
})

test('should return sum of array containing two elements', () => {
    const actual = sut.sumArray([1, 2])

    expect(actual).toEqual(3)
})

test('should return sum of array containing three elements', () => {
    const actual = sut.sumArray([1, 2, 3])

    expect(actual).toEqual(6)
})

test('should throw exception on invalid element in array', () => {
    expect(() => {
        sut.sumArray([1, 'String', 3])
    }).toThrow('Invalid: Input is not a number')
})
