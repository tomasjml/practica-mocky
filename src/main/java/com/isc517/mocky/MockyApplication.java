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
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class MockyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MockyApplication.class, args);
    }

    @Bean
    public CommandLineRunner loadInitialData(UserService userService, MockResponseService mockService){
        System.out.println("Initializing Data - ");
        return args -> {
            User newUser = new User(
                    "admin@mocky.com",
                    "admin",
                    "Admin",
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
                    "{username: lol}",
                    "Example",
                    "Description",
                    Expiration.Day,
                    LocalDateTime.now(),
                    LocalDateTime.now(),
                    "UTF-8",
                    newUser
            ));

            User newUser2 = new User(
                    "jtml.mass@gmail.com",
                    "jtmlmass",
                    "Tomas",
                    Arrays.asList("ROLE_ADMIN"),
                    true,
                    Arrays.asList()
            );
            userService.createUser(newUser2);

            User newUser3 = new User(
                    "test@gmail.com",
                    "test",
                    "Test",
                    Arrays.asList("ROLE_ADMIN"),
                    true,
                    Arrays.asList()
            );
            userService.createUser(newUser3);



            System.out.println("Done initializing Data - ");
        };
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/all/{user}").allowedOrigins("http://localhost:3000/*");
            }
        };
    }
}
