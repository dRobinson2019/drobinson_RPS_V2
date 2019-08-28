import { Game } from '../types/GameFormTypes'

export function Rounds() {
    let rounds: Game[] = []

    const isEmpty = (): boolean => !rounds.length

    const limitReached = (roundLimit: number): boolean => rounds.length === roundLimit
    
    const save = (round: Game) => rounds.push(round)

    const all = () => rounds

    return {
        isEmpty,
        limitReached,
        save,
        all
    }
}