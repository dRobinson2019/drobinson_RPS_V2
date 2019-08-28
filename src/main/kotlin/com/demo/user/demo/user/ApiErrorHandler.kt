package com.demo.user.demo.user

import org.springframework.http.HttpStatus

data class ApiErrorHandler(val status: HttpStatus, val message: String?)