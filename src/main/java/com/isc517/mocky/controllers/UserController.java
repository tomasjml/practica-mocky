package com.isc517.mocky.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.isc517.mocky.entities.User;
import com.isc517.mocky.services.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;
import javax.print.attribute.standard.MediaTray;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class UserController {
    private final UserService userService;
    private static final Gson gson = new Gson();

    @Value("server.port")
    private String port;

    @Value("${token_jwt}")
    private String secretKey;

    @CrossOrigin
    @GetMapping("/users")
    public ResponseEntity<JsonArray> getAllUsers(){
        JsonArray jsonUsers = null;
        for(User user: userService.getAllUsers()){
            JsonObject jsonUser = new JsonObject();
            jsonUser.addProperty("username", user.getUsername());
            jsonUser.addProperty("name", user.getName());
            jsonUser.addProperty("isAdministrator", user.isAdministrator());
            assert false;
            jsonUsers.add(jsonUser);
        }
        return new ResponseEntity<JsonArray>(jsonUsers, HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<String> authenticate(@RequestBody Map<String, String> payload){
        String token = "";
        System.out.println("Payload value: " + payload);
        Optional<User> user = userService.confirmUser(payload.get("username"), payload.get("password"));
        System.out.println("User: " + user);
        if(user.isEmpty()){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        token = generateToken(user.get());

        System.out.println(port);

        // JSONObject with the token and the payload username
        JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("token", token);
        jsonObject.addProperty("username", user.get().getUsername());
        return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.OK);
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

        return token;
    }
}
