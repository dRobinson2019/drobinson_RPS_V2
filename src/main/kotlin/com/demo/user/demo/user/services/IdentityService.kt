package com.demo.user.demo.user.services

import org.springframework.stereotype.Service

@Service
class IdentityService {
    data class Identity(val id: String, val username: String)
    fun identity(id: String, username: String) = Identity(id, username)
}