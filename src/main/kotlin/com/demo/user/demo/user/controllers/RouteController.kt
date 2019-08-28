package com.demo.user.demo.user.controllers

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.view.RedirectView
import java.io.IOException

@RestController
class RouteController @Autowired constructor(){

    @RequestMapping("/game/*")
    @Throws(IOException::class)
    fun notFound(): RedirectView {
        return RedirectView("/")
    }
}
