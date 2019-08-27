package com.demo.user.demo.user.models

import javax.persistence.*
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@Entity
@Table(name = "round")
data class Round(
        @Column(name = "playerOne")
        @get: NotBlank(message = "{playerOne.required}")
        @get: Size(min = 4, max = 8, message = "{playerOne.size}")
        val playerOne: String = "",
        @Column(name = "playerTwo")
        @get: NotBlank(message = "{playerTwo.required}")
        @get: Size(min = 4, max = 8, message = "{playerTwo.size}")
        val playerTwo: String = "",
        @Column(name = "matchId")
        @NotBlank
        val matchId: String = "",
        @Column(name = "timestamp")
        val timestamp: String = "",
        @Column(name="username")
        var username: String = "",
        @Id
        @GeneratedValue
        val id: Long = -1
) {
    override fun toString(): String{
        return "Round[id=$id, playerOne=$playerOne, playerTwo=$playerTwo]"
    }
}