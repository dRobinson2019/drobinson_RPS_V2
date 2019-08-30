import React, { useState } from 'react'
import {Rounds} from "../Rounds/Rounds";

// @ts-ignore
export const GameForm = ({ state, history, handleChange, handleSubmit, submitDisabled}) => {
  return (
    <div className="gameFormContainer">
      {state.message && <div className={"message active"}>{state.message}</div>}
      <Rounds {...{history}} />
      <form id="gameForm">
        <div className="form-group">
          <label htmlFor="">Player One</label>
          <input name="playerOneChoice" placeholder={"Player 1 Choice"} value={state.playerOneChoice}
                 onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="">Player Two</label>
          <input name="playerTwoChoice" placeholder={"Player 2 Choice"} value={state.playerTwoChoice}
                 onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <button onClick={handleSubmit}  disabled={submitDisabled}>PLAY</button>
        </div>
      </form>
    </div>
  )
}