package com.isc517.mocky.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@EnableWebSecurity
@Configuration
public class Security extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //Clase para encriptar contraseña
        BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();

        //
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //permitiendo el acceso vía cors, crfs y los iframe.;
        http.csrf().disable();
        http.cors().disable();
        http.headers().frameOptions().disable();
        //permitiendo el acceso.
        http
                .authorizeRequests()
                .antMatchers("/dbconsole/**").permitAll()
                .antMatchers("/").authenticated()
                .and()
                .formLogin().permitAll()
                .and()
                .logout().permitAll()
                .and()
                .authorizeRequests()
                .antMatchers("/api/**","/mock/**", "/auth/**").permitAll()
                .and().addFilterBefore(new JWTAuthorizationFilter(), BasicAuthenticationFilter.class);

    }
}
