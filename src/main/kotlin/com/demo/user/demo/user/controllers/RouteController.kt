package com.demo.user.demo.user.controllers

import com.demo.user.demo.user.services.IdentityService
import com.demo.user.demo.user.services.RoundService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
@RequestMapping("/api")
class RouteController @Autowired constructor(private val roundService: RoundService){

    @GetMapping("/startMatch")
    fun startGame(): IdentityService.UUID {
        val uuid = UUID.randomUUID().toString()
        return IdentityService.UUID(uuid)
    }

}