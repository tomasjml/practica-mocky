package com.isc517.mocky;

import com.isc517.mocky.entities.User;
import com.isc517.mocky.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class MockyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MockyApplication.class, args);
    }

    @Bean
    public CommandLineRunner loadInitialData(UserService userService){
        System.out.println("Initializing Data - ");
        return args -> {
            userService.createUser(new User(
                    "admin",
                    "admin",
                    "admin",
                    Arrays.asList("ROLE_ADMIN"),
                    true
            ));
            System.out.println("Done initializing Data - ");
        };
    }
}
