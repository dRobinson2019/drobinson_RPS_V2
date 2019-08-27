package com.demo.user.demo.user.services

import org.springframework.stereotype.Service


@Service
class IdentityService {
    data class UUID(val id: String)

    fun uuid(id: String) = UUID(id)
}