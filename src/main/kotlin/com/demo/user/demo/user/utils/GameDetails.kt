package com.demo.user.demo.user.utils

data class GameDetails(var roundCount: Long, val roundOutcomes: HashSet<String> = hashSetOf() ) {
    fun incrementRoundCount() {
       roundCount++
    }
    fun roundLimitReached(limitNumber: Long): Boolean {
        return limitNumber == roundCount
    }

    fun addToRoundOutcomes(info: String): Boolean {
        if(!roundOutcomes.add(info)) {
            return false
        }
        return true
    }

    fun resetDetails() {
        roundCount = 1
        roundOutcomes.clear()
    }
}
