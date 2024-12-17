import { Die } from './Die.js'

export class DiceFactory {
    createDice(type) {
        switch (type) {
            case 'd6':
                return new Die(6)
        }
    }
}