import React from 'react'
import { Switch, Route } from 'react-router'
import GameForm from './components/GameForm/GameForm'
import { HistoryDisplay } from './components/HistoryDisplay/HistoryDisplay'
import { Header } from './components/Header/Header'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route  to={'/'} component={GameForm} />
      </Switch>
    </div>
  )
}

export default App
