export type InitialState = {
    message: string
    playerOneChoice: string
    playerTwoChoice: string
    playerOneName: string
    playerTwoName: string
    csrfToken: string
    uuid: number | null
}

export type Game = {
    playerOne: string,
    playerTwo: string,
    matchId: number | null
}

export type Choices = 'rock' | 'paper' | 'scissors'