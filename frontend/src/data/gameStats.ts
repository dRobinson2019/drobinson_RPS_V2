export function Rounds() {
    let rounds = []

    this.isEmpty = () => !rounds.length

    this.limitReached = (roundLimit) => rounds.length === roundLimit
    
    this.save = (round) => rounds.push(round)

    this.all = () => rounds
}