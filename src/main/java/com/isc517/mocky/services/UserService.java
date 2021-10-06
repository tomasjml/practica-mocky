package com.isc517.mocky.services;

import com.isc517.mocky.entities.User;
import com.isc517.mocky.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class  UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public void createUser(User user){
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    public Optional<User> confirmUser(String username, String password){
        Optional<User> loggedUser = Optional.of(userRepository.findByUsername(username));
        if(loggedUser.isPresent()){
            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
            if(loggedUser.get().getPassword().equals(bCryptPasswordEncoder.encode(password))){
                return loggedUser;
            }
        }
        return Optional.ofNullable(null);
    }
}
