export class ConsoleUI {
    welcome() {
        console.log('Welcome to Dicey!')
    }

    rules() {
        console.log('Rules: You\'ll start with 2 dice. You can roll additional dice, and their results will be added to your total.\n The goal is to get as close to, but not over, a set Max Score, using as few dice as possible.')
    }

    menu() {
        console.log('1. Start Game')
        console.log('2. Read Rules')
        console.log('3. High Scores')
        console.log('4. Exit')
    }
}
