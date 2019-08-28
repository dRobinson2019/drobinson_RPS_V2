import React from 'react'
import GameForm from './components/GameForm/GameForm'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container">
        <GameForm {...{uuid: 2 || null}} />
    </div>
  )
}

export default App
