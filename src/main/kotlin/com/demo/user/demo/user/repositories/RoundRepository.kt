package com.demo.user.demo.user.repositories

import com.demo.user.demo.user.models.Round
import org.springframework.data.repository.CrudRepository

interface RoundRepository : CrudRepository<Round, Long> {
    fun findByUsername(username: String): MutableIterable<Round>

}