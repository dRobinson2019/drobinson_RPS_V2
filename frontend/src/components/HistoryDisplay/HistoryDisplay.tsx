import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

export const HistoryDisplay =  () =>{
  const [playedTurns, setPlayedTurns] =  useState(null)

  useEffect(() => {
    const results = async () => {
      const response = await fetch('/api/getHistory')
      const results = await response.json()
      setPlayedTurns(results)
    }
    results()
  },[])

  return (
    <Table hover>
      <thead>
      <tr>
        <th>Round Id#</th>
        <th>Player One</th>
        <th>Player Two</th>
      </tr>
      </thead>
      <tbody>
      { playedTurns && playedTurns.map((turn: { id: React.ReactNode; playerOne: React.ReactNode; playerTwo: React.ReactNode; }, index: React.ReactText) => (
        <tr key={index}>
          <td>{turn.id}</td>
          <td>{turn.playerOne}</td>
          <td>{turn.playerTwo}</td>
        </tr>
      ))
      }
      </tbody>
    </Table>
  )
}


