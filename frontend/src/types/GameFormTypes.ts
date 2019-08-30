export type InitialState = {
    message: string
    playerOneChoice: string
    playerTwoChoice: string
    playerOneName: string
    playerTwoName: string
    csrfToken: string
    uuid: string | null
    roundCount: number
}

export type Game = {
    playerOne: string,
    playerTwo: string,
    matchId: number | null
}

export type Choices = 'rock' | 'paper' | 'scissors'

export type UUID = { uuid: number }

export type handleSetHistoryProps = (message: string, winner: boolean) => void
