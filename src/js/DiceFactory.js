import { Die } from './Die.js'

export class DiceFactory {
    createDice(type) {
        switch (type) {
            case 'd6':
                return new Die(6)
            case 'd12':
                return new Die(12)
            default:
                throw new Error('Unknown die type')
        }
    }
}