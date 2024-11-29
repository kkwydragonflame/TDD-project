export class MyMath {
    add(a, b) {
        this.#validateInput(a, b)

        return a + b
    }

    subtract(a, b) {
        this.#validateInput(a, b)

        return a - b
    }

    #validateInput(input1, input2) {
        if (typeof input1 !== 'number' || typeof input2 !== 'number') {
            throw new Error('Invalid: Input is not a number')
        }
    }
}