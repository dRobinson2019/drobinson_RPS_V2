import React from 'react'
import { startMatch } from '../../utils/GameService'
import { Button } from 'reactstrap'

export const StartGameButton = ({uuid, setUuid}) => {
    const generateUuid =  async () => {
        await startMatch().then(data => setUuid(data.id))
    }

    return (
        <Button color="primary" onClick={() => generateUuid()}>Start Match</Button>
    )
}