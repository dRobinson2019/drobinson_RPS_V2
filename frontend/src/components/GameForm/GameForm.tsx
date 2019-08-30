import React, { useState, useEffect } from 'react'
import {handleSetHistoryProps, InitialState, UUID} from '../../types/GameFormTypes'
import { mergeState, getCookie } from '../../utils/Utility';
import './GameForm.css'
import {Rounds} from "../Rounds/Rounds";

const GameForm = () => {
    const initialState: InitialState = {
        message: "",
        playerOneChoice: "",
        playerTwoChoice: "",
        playerOneName: "",
        playerTwoName: "",
        csrfToken: "",
        uuid: "",
        roundCount: 1
    }

    const [state, setState] = useState(initialState)
    const [history, setHistory] = useState({
        round1: null,
        round2: null,
        round3: null,
        winner: ''
    })

    useEffect(() => {
        const  token = getCookie('XSRF-TOKEN')
        const uuid = getCookie('UUID')
        console.log('uuid: ', uuid)
        handleSetState(state, {csrfToken:  token })
        handleSetState(state, {uuid: uuid })
    }, [state.uuid])
    
    const handleSetState = (originalObject: Object, updatedObject: Partial<InitialState>) => setState(mergeState(originalObject, updatedObject))
    const handleChange = (e: any) => handleSetState(state, {[e.target.name]: e.target.value})
    const handleSetHistory: handleSetHistoryProps = (message, winner)  => {
        if (state.roundCount === 3) {
            handleSetState(state, { roundCount: 1 })
        }  else {
            const round: string = `round${state.roundCount}`
            setHistory({ ...history, [`${round}`]: message, winner: winner ? message : ''})
            handleSetState(state, { roundCount: state.roundCount + 1})
        }
    }

    const invalid = () => handleSetState(state, {message: "Invalid choice!"})
    const isInvalid = (choice: string) => !["rock","paper","scissors"].includes(choice)
    const tie = () => handleSetState(state, {message: "Draw. Play again!"})
    const isTie = () => state.playerOneChoice === state.playerTwoChoice

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const Game = {
            playerOne: state.playerOneChoice,
            playerTwo: state.playerTwoChoice,
            matchId: state.uuid, //temporary
            timestamp: Date.now()
        }

        if(isInvalid(state.playerOneChoice) || isInvalid(state.playerTwoChoice)) {
            invalid()
        }
        if (isTie()) {
            tie()
        }
        // @ts-ignore
        await fetch("/api/", {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': state.csrfToken,
            },
            referrer: 'no-referrer',
            body: JSON.stringify(Game)
            }).then((result: any) => result.json()).then((result: any) => {
            if (result) {
                handleSetHistory(result.message, result.winner)
            } else {
                setState(mergeState(state, { error: result.message }))
            }
        })
    }

    return (
        <div className="gameFormContainer">
            { state.message && <div className={"message active"}>{state.message}</div> }
            <Rounds {...{history}} />
            <form id="gameForm">
                <div className="form-group">
                    <label htmlFor="">Player One</label>
                    <input name="playerOneChoice" placeholder={"Player 1 Choice"} value={state.playerOneChoice} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Player Two</label>
                    <input name="playerTwoChoice" placeholder={"Player 2 Choice"} value={state.playerTwoChoice} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <button onClick={handleSubmit}>PLAY</button>
                </div>
            </form>
        </div>
    )
}

export default GameForm
