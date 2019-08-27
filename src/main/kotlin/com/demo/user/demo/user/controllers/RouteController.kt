package com.demo.user.demo.user.controllers

import com.demo.user.demo.user.services.IdentityService
import com.demo.user.demo.user.services.RoundService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.view.RedirectView
import java.io.IOException
import java.util.*

@RestController
class RouteController @Autowired constructor(){

    @RequestMapping("/game/*")
    @Throws(IOException::class)
    fun notFound(): RedirectView {
        return RedirectView("/")
    }
}
