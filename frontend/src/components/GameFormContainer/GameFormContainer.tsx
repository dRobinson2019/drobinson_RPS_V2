import React, { useState, useEffect } from 'react'
import {handleSetHistoryProps, InitialState} from '../../types/GameFormTypes'
import { mergeState, getCookie } from '../../utils/Utility';
import {StartGameButton} from "../StartGameButton/StartGameButton";
import {GameForm} from "../GameForm/GameForm";
import './GameFormContainer.css'


const GameFormContainer = () => {
    const initialState: InitialState = {
        message: "",
        playerOneChoice: "",
        playerTwoChoice: "",
        playerOneName: "",
        playerTwoName: "",
        csrfToken: "",
        roundCount: 1
    }

    const [state, setState] = useState(initialState)
    const [uuid, setUuid] = useState(null)
    const [submitDisabled, setSubmitDisabled] = useState(false)
    const [history, setHistory] = useState({
        round1: null,
        round2: null,
        round3: null,
        winner: ''
    })

    useEffect(() => {
        const  token = getCookie('XSRF-TOKEN')
        console.log('uuid: ', uuid)
        handleSetState(state, {csrfToken:  token })
    }, [uuid])
    useEffect( () => {
        if (history.winner) {
            setTimeout( () => {
                setUuid(null)
            },2500)
        }
    }, [history.winner])

    const handleSetState = (originalObject: Object, updatedObject: Partial<InitialState>) => setState(mergeState(originalObject, updatedObject))
    const handleChange = (e: any) => handleSetState(state, {[e.target.name]: e.target.value})
    // @ts-ignore
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
            matchId: uuid,
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
      uuid ? <GameForm {...{ state, history, handleChange, handleSubmit, submitDisabled}} /> : <StartGameButton {...{uuid, setUuid}}/>
      )
}

export default GameFormContainer
