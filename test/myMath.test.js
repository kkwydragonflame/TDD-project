import { MyMath } from '../src/js/MyMath.js'
import { test, expect, beforeEach } from '@jest/globals'

let sut;

beforeEach(() => {
    sut = new MyMath();
})

test('should return 3', () => {
    const actual = sut.add(1, 2)

    const expected = 3

    expect(actual).toEqual(expected)
})

test('should return sum of two numbers', () => {
    const actual = sut.add(7, 3)

    const expected = 10

    expect(actual).toEqual(expected)
})
