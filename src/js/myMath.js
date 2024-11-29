export class MyMath {
    add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Invalid: Input is not a number')
        }

        return a + b
    }

    subtract(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Invalid: Input is not a number')
        }
        
        return a - b
    }
}