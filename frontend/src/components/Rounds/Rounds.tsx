import React from 'react'

// @ts-ignore
const RoundMessages = ({history}) => (
    <>
    { history.round1 && <div className="round round1">Round 1: <span className="round1">{history.round1}</span></div>}
    { history.round2 && <div className="round round2">Round 2: <span className="round2">{history.round2}</span></div>}
    { history.round3 && <div className="round round3">Round 3: <span className="round3">{history.round3}</span></div>}
    </>
)

// @ts-ignore
const RoundWinner = ({history}) => (
    <>
    { history.winner && <div className="round">Best of three: <span className="winner">{history.winner}</span></div>}
    </>
)
// @ts-ignore
export const Rounds = ({history}) => {
    return !history.winner ? <RoundMessages history={{...history}} /> : <RoundWinner history={{...history}} />
}