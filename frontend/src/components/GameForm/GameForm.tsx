import React, { useState, useEffect } from 'react'
import { InitialState, Game, Choices } from '../../types/GameFormTypes'
import { mergeState, getCookie } from '../../utils/Utility';

const GameForm = ({ uuid }: {uuid: number}) => {
    const initialState: InitialState = {
        message: "",
        playerOneChoice: "",
        playerTwoChoice: "",
        playerOneName: "",
        playerTwoName: "",
        csrfToken: "",
        uuid: uuid
        
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const  token = getCookie('XSRF-TOKEN')
        setState(mergeState(state, {csrfToken:  token }))
        setState(mergeState(state, {uuid: getCookie('UUID') }))

    }, [state.uuid])
    const handleSetState = (originalObject: Object, updatedObject: Partial<InitialState>) => setState(mergeState(originalObject, updatedObject))
    const handleChange = (e: any) => handleSetState(state, {[e.target.name]: e.target.value})
    const invalid = () => handleSetState(state, {message: "Invalid choice!"})
    const isInvalid = (choice: string) => !["rock","paper","scissors"].includes(choice)
    const tie = () => handleSetState(state, {message: "Draw. Play again!"})
    const isTie = () => state.playerOneChoice === state.playerTwoChoice
    const handleServerMessage = (message: string) => handleSetState(state, {message: message })

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const Game = {
            playerOne: state.playerOneChoice,
            playerTwo: state.playerTwoChoice,
            matchId: 12,
            timestamp: Date.now()
        }

        console.log('Game: ', Game)
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
                console.log("RESULT success: ", result)
                alert(JSON.stringify(result))
                handleServerMessage(result.message)
            } else {
                setState(mergeState(state, { error: result.message }))
            }
        })
    }

    return (
        <div className="gameFormContainer">
            { state.message && <div className={"message"}>{state.message}</div> }
            <form id="gameForm"
            >
                <input name="playerOneChoice" placeholder={"Player 1 Choice"} value={state.playerOneChoice} onChange={handleChange} required/>
                <input name="playerTwoChoice" placeholder={"Player 2 Choice"} value={state.playerTwoChoice} onChange={handleChange} required/>
                <button onClick={handleSubmit}>PLAY</button>
            </form>
        </div>
    )
}

export default GameForm
