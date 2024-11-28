import 'myMath.js'

test('should return 3', () => {
    const actual = myMath.add(1, 2)

    const expected = 3

    expected(actual).toEqual(expected)
})