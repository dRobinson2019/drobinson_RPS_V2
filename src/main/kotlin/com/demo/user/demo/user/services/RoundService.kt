package com.demo.user.demo.user.services

import com.demo.user.demo.user.models.Round
import org.springframework.stereotype.Service

@Service
class RoundService {
    fun draw(round: Round): Boolean {
        val (playerOne, playerTwo) = round
        return playerOne == playerTwo
    }

    fun invalid(choice: String): Boolean {
        val choices: List<String> = listOf("rock","paper","scissors")
        return !choices.contains(choice.toLowerCase())
    }

    private fun playerOneWins(round: Round): Boolean {
        val (playerOne, playerTwo) = round
        return playerOne == "rock" && playerTwo == "scissors" || playerOne == "scissors" && playerTwo == "paper" ||  playerOne == "paper" && playerTwo == "rock"
    }


    fun getWinner(round: Round): String {
        val (playerOne, playerTwo) = round
        lateinit var message: String
        if (invalid(playerOne) || invalid(playerTwo)) {
            return "Invalid entry!"
        }
        if (draw(round)) {
            return "Draw!"
        }

        if (playerOneWins(round)) {
            return "Player 1 wins!"
        } else {
            return "Player 2 wins!"
        }
    }


}
