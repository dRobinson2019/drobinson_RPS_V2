package com.demo.user.demo.user.repositories

import com.demo.user.demo.user.models.Match
import org.springframework.data.repository.CrudRepository

interface MatchRepository : CrudRepository<Match, Long> {
    fun findByUsername(username: String): MutableIterable<Match>
}