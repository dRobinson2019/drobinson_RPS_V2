export const getLeaderBoard = async () => {
  const response = await fetch('/game/board')
  const results = await response.json()
  return results
}

export const startMatch = async () => {
  const response = await fetch('/api/startMatch')
  const results = await response.json()
  return results
}