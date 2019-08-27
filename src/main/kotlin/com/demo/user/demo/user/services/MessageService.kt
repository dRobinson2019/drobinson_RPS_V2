package com.demo.user.demo.user.services

import org.springframework.stereotype.Service

@Service
class MessageService {
    data class Message(val message: String, val winner: Boolean? = false)

    fun message(message: String, win: Boolean = false) = Message(message)
}