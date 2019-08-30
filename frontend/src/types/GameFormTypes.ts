export type InitialState = {
    message: string
    playerOneChoice: string
    playerTwoChoice: string
    playerOneName: string
    playerTwoName: string
    csrfToken: string
    roundCount: number
}

export type Game = {
    playerOne: string,
    playerTwo: string,
    matchId: number | null
}

export type Choices = 'rock' | 'paper' | 'scissors'

export type UUID = { uuid: string | null }

export type handleSetHistoryProps = (message: string, winner: boolean) => void
