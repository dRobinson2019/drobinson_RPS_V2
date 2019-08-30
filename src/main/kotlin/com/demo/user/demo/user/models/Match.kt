package com.demo.user.demo.user.models

import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "match")
data class Match(
        @Column(name = "winner")
        var winner: String = "",
        @Column(name = "timestamp")
        var timestamp: String = LocalDateTime.now().toString(),
        @Column(name="username")
        var username: String = "",
        @Id
        @GeneratedValue
        val id: Long = -1
) {
    override fun toString(): String{
        return "Round[id=$id]"
    }
}