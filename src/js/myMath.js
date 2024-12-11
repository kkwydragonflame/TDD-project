export class MyMath {
    add(a, b) {
        for (const arg of arguments) {
            this.#validateInput(arg)
        }

        return a + b
    }

    subtract(a, b) {
        for (const arg of arguments) {
            this.#validateInput(arg)
        }

        return a - b
    }

    sumArray(array) {
        array.forEach(element => {
            this.#validateInput(element)
        })
        return array.reduce((accumulator, currentValue) => accumulator + currentValue)
    }

    #validateInput(input) {
        if (typeof input !== 'number') {
            throw new Error('Invalid: Input is not a number')
        }
    }
}
