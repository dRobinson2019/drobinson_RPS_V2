package com.demo.user.demo.user.services

import org.junit.Assert
import org.junit.Test
import com.demo.user.demo.user.models.Round

class RoundServiceTest constructor() {

    @Test
    fun draw() {
        val message = "Draw. Play again!"
        Assert.assertEquals(MessageService.Message("Draw. Play again!"), MessageService.Message(message))
    }

    @Test
    fun playerOneWins() {
        val game = Round("rock","scissors", "fake123")
        val roundService = RoundService()
        val winMessage = roundService.getWinner(game)
        Assert.assertEquals(MessageService.Message(message = "Player 1 wins!"), MessageService.Message(winMessage))
    }

    @Test
    fun invalid() {
        val game = Round("rocsk","candy")
        val roundService = RoundService()
        val outcome: String = roundService.getWinner(game)
        Assert.assertEquals(MessageService.Message("Invalid entry!"), MessageService.Message(outcome))
    }
}