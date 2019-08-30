import React from 'react'
import { Switch, Route } from 'react-router'
import GameFormContainer from './components/GameFormContainer/GameFormContainer'
import { HistoryDisplay } from './components/HistoryDisplay/HistoryDisplay'
import { Header } from './components/Header/Header'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route  to={'/'} component={GameFormContainer} />
      </Switch>
    </div>
  )
}

export default App
