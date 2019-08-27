package com.demo.user.demo.user.controllers

import com.demo.user.demo.user.models.Round
import com.demo.user.demo.user.repositories.RoundRepository
import com.demo.user.demo.user.services.IdentityService
import com.demo.user.demo.user.services.RoundService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.validation.Errors
import org.springframework.web.bind.annotation.*
import java.util.*
import javax.annotation.security.RolesAllowed
import javax.validation.Valid

@RestController
@RequestMapping("/api")
class ApiController @Autowired constructor(private val roundService: RoundService, private val roundRepository: RoundRepository) {

    @GetMapping("/startMatch")
    fun startGame(): IdentityService.Identity {
        val uuid = UUID.randomUUID().toString()
        val username: String = SecurityContextHolder.getContext().authentication.principal.toString()
        return IdentityService.Identity(uuid, username)
    }

    @PreAuthorize("hasRole('ADMIN')")
    @RolesAllowed("ADMIN")
    @GetMapping("/getBoard")
    fun getBoard(): MutableIterable<Round> {
        return roundRepository.findAll()
    }

    @GetMapping("getHistory")
    fun getHistory(): MutableIterable<Round> {
        val username: String = SecurityContextHolder.getContext().authentication.principal.toString()
        return  roundRepository.findByUsername(username)
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    @ResponseBody
    fun submit (@Valid @RequestBody  round: Round, errors: Errors) {
        try {
            if (!errors.hasErrors()) {
                val winner = roundService.getWinner(round)
            }
        }
    }



}