import { Die } from './Die.js'

export class DiceFactory {
    createDice(type) {
        switch (type) {
            case 'd4':
                return new Die(4)
            case 'd6':
                return new Die(6)
            case 'd12':
                return new Die(12)
            case 'd20':
                return new Die(20)
            default:
                throw new Error('Unknown die type')
        }
    }
}