export const playRound = async () => {
    const response = await fetch('/api/playRound', {
        
    })
    const results = await response.json()
    return results
}

export const startMatch = async () => {
    const response = await fetch('/api/startmatch')
    const results = await response.json()
    return results
}