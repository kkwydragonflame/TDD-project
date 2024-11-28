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
