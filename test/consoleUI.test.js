let sut;

beforeEach(() => {
    sut = new ConsoleUI()
})

test('should print welcome message to console', () => {
    const spy = jest.spyOn(console, 'log')

    sut.welcome()

    expect(spy).toHaveBeenCalledWith('Welcome to Dicey!')
})