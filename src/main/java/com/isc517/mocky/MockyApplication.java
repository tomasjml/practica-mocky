package com.isc517.mocky;

import com.isc517.mocky.entities.Expiration;
import com.isc517.mocky.entities.MockResponse;
import com.isc517.mocky.entities.User;
import com.isc517.mocky.services.MockResponseService;
import com.isc517.mocky.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class MockyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MockyApplication.class, args);
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean
    public CommandLineRunner loadInitialData(UserService userService, MockResponseService mockService){
        System.out.println("Initializing Data - ");
        return args -> {
            User newUser = new User(
                    "admin",
                    "admin",
                    "admin",
                    Arrays.asList("ROLE_ADMIN"),
                    true,
                    Arrays.asList()
            );
            userService.createUser(newUser);
            mockService.createMock(new MockResponse(
                    "",
                    "",
                    "GET",
                    "",
                    200,
                    "application/json",
                    "",
                    "Example",
                    "Description",
                    Expiration.Day,
                    LocalDateTime.now(),
                    LocalDateTime.now(),
                    newUser
            ));

            System.out.println("Done initializing Data - ");
        };
    }
}
