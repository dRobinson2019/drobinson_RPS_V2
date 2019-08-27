import React, { useState } from 'react'
import { InitialState } from './GameFormTypes'
import { mergeState } from '../../utils/Utility';
import { Stats, stat } from 'fs';


const GameForm = () => {
    const initialState: InitialState = {
        message: "",
        playerOneChoice: "",
        playerTwoChoice: "",
        playerOneName: "",
        playerTwoName: "",
        uuid: null
    }

    const [state, setState] = useState(initialState)
    const handleSetState = (originalObject: Object, updatedObject: Partial<InitialState>) => setState(mergeState(originalObject, updatedObject))
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const Game = {
            playerOne: state.playerOneChoice,
            playerTwo: state.playerTwoChoice,
            matchId: state.uuid
        }
    }
    const handleChange = (e: any) => handleSetState(state, {[e.target.name]: e.target.value})
    const invalid = () => handleSetState(state, {message: "Invalid choice!"})
    const tie = () => handleSetState(state, {message: "Draw. Play again!"})
    const playerOneWins = () => handleSetState(state, {message: "Player 1 wins!"})
    const playerTwoWins = () => handleSetState(state, {message: "Player 2 wins!"})


    return (
        <div className="gameFormContainer">
            { state.message && <div className={"message"}>{state.message}</div> }
            <form id="gameForm">
                <input name="playerOneChoice" value={state.playerOneChoice} onChange={handleChange} required/>
                <input name="playerTwoChoice" value={state.playerTwoChoice} onChange={handleChange} required/>
                <button onClick={handleSubmit}>PLAY</button>
            </form>
        </div>
    )

}

export default GameForm
