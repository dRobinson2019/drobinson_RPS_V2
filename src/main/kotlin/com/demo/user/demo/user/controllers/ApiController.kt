package com.demo.user.demo.user.controllers

import com.demo.user.demo.user.models.Match
import com.demo.user.demo.user.models.Round
import com.demo.user.demo.user.repositories.MatchRepository
import com.demo.user.demo.user.repositories.RoundRepository
import com.demo.user.demo.user.services.IdentityService
import com.demo.user.demo.user.services.MessageService
import com.demo.user.demo.user.services.RoundService
import com.demo.user.demo.user.utils.GameDetails
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.validation.Errors
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*
import java.util.*
import javax.annotation.security.RolesAllowed
import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletResponse
import javax.validation.Valid
import javax.validation.ValidationException

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
@Validated
class ApiController @Autowired constructor(private val roundService: RoundService, private val roundRepository: RoundRepository, private val matchRepository: MatchRepository) {
    val gameDetails = GameDetails(roundCount= 1)
    @GetMapping("/startMatch")
    fun startGame(response: HttpServletResponse): IdentityService.Identity {
        val uuid = UUID.randomUUID().toString()
        response.addCookie(Cookie("UUID", uuid))
        val username: String = SecurityContextHolder.getContext().authentication.principal.toString()
        return IdentityService.Identity(uuid, username)
    }

    @GetMapping("/getHistory")
    fun getHistory(): MutableIterable<Round> {
        val username: String = SecurityContextHolder.getContext().authentication.principal.toString()
        return  roundRepository.findByUsername(username)
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping(value="/", consumes= ["application/json", "application/x-www-form-urlencoded"])
    @ResponseBody
    fun submit (@Valid @RequestBody round: Round, errors: Errors): MessageService.Message {
        gameDetails.incrementRoundCount()
        val current = round.timestamp
        println("Current Date and Time is: $current")
        try {
            if (!errors.hasErrors()) {
                val winner = roundService.getWinner(round)
                roundRepository.save(round)
                if (!gameDetails.addToRoundOutcomes(winner)) {
                    var match = Match()
                    match.timestamp = round.timestamp
                    match.winner = winner
                    match.username = SecurityContextHolder.getContext().authentication.principal.toString()
                    matchRepository.save(match)
                    gameDetails.resetDetails()
                    return MessageService.Message(winner, true)
                }
                return MessageService.Message(winner)
            }
        } catch (err: Throwable) {
            throw ValidationException("Errors throws: $err")
        }
        throw ValidationException("Errors: $errors")
    }

    @PreAuthorize("hasRole('ADMIN')")
    @RolesAllowed("ADMIN")
    @GetMapping("/getBoard")
    fun getBoard(): MutableIterable<Round> {
        return roundRepository.findAll()
    }
}
