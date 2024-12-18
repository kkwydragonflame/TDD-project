export class DiceyGame {
    #ui
    #dieFactory

    constructor(ui, dieFactory) {
        if (!ui) {
            throw new Error('UserInterface is required')
        }
        if (!dieFactory) {
            throw new Error('DieFactory is required')
        }
        this.ui = ui
        this.dieFactory = dieFactory
    }

    setupGame() {
        this.ui.welcome()
        this.ui.menu()
    }
}