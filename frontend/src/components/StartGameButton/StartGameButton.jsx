import React from 'react'
import { startMatch } from '../../utils/gameService'
import { Button } from 'reactstrap'

export const StartGameButton = ({setUuid}) => {
    const generateUuid =  async () => {
        await startMatch().then(data => setUuid((data)))
    }

    return (
        <Button color="primary" onClick={() => setUuid(generateUuid())}>Start Match</Button>
    )
}