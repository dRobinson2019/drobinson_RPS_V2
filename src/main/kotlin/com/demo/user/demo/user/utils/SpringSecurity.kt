package com.demo.user.demo.user.utils

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.csrf.CookieCsrfTokenRepository

@Configuration
@EnableWebSecurity
class SpringSecurityConfig : WebSecurityConfigurerAdapter() {

    @Autowired
    @Throws(Exception::class)
    protected override fun configure(auth: AuthenticationManagerBuilder) {

        auth.inMemoryAuthentication()
                .withUser("user").password("{noop}user").roles("USER")
                .and()
                .withUser("admin").password("{noop}admin").roles("USER", "ADMIN")
    }

    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        http
                .authorizeRequests()
                .antMatchers("/admin/**").hasRole("ADMIN")
                .antMatchers("/game/board").hasRole("ADMIN")
                .antMatchers("/game/getboard").hasRole("ADMIN")
                .antMatchers("/anonymous*").anonymous()
                .antMatchers("/login*").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .and()
                .csrf()
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and()
                .logout()
                .logoutUrl("/logout")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
    }


//    @Throws(Exception::class)
//    override fun configure(http: HttpSecurity) {
//        http.authorizeRequests()
//                .antMatchers("/").permitAll()
//                .antMatchers("/h2_console/**").permitAll()
//
//        http.csrf().disable()
//        http.headers().frameOptions().disable()
//    }

}