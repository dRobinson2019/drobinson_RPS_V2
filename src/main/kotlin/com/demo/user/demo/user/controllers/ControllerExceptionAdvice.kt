package com.demo.user.demo.user.controllers

import com.demo.user.demo.user.ApiErrorHandler
import org.springframework.http.HttpStatus
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.ResponseStatus
import javax.validation.ValidationException

@ControllerAdvice
class ControllerExceptionHandler {

    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ValidationException::class)
    fun validationExceptionHandler(e: ValidationException): ApiErrorHandler {
        return ApiErrorHandler(HttpStatus.BAD_REQUEST, e.message)
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException::class)
    fun paramValidationExceptionHandler(e: ValidationException): ApiErrorHandler {
        return  ApiErrorHandler(HttpStatus.BAD_REQUEST, e.message)
    }

}
