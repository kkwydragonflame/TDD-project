export class DiceyGame {
    #ui
    
    constructor(ui) {
        if (!ui) {
            throw new Error('UserInterface is required')
        }
        this.ui = ui
    }
}