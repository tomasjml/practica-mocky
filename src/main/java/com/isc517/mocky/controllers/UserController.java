package com.isc517.mocky.controllers;

import com.google.gson.Gson;
import com.isc517.mocky.entities.User;
import com.isc517.mocky.services.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/")
public class UserController {
    private final UserService userService;
    private static final Gson gson = new Gson();

    @Value("${token_jwt}")
    private String secretKey;

    @GetMapping("users")
    public ResponseEntity<String> getAllUsers(){
        return new ResponseEntity<String>(gson.toJson(userService.getAllUsers()), HttpStatus.OK);
    }

    @PostMapping("auth")
    public ResponseEntity<String> auth(@RequestParam("username") String username, @RequestParam("password") String password){
        String token = "";
        Optional<User> user = userService.confirmUser(username, password);
        if(user.isEmpty()){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        token = generateToken(user.get());
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    /**
     *
     * @param user
     * @return
     */
    private String generateToken(User user) {

        String token = Jwts
                .builder()
                .setId("softtekJWT")
                .setSubject(user.getName())
                .claim("roles",user.getRoles())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 600000))
                .signWith(SignatureAlgorithm.HS512,
                        secretKey.getBytes()).compact();

        return "Bearer " + token;
    }
}
