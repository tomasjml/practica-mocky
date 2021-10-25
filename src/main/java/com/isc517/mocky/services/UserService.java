package com.isc517.mocky.services;

import com.isc517.mocky.entities.User;
import com.isc517.mocky.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class  UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public void createUser(User user){

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    public Optional<User> confirmUser(String username, String password){
        Optional<User> loggedUser = userRepository.findByUsername(username);

        if(loggedUser.isPresent()){
            String encPassword = bCryptPasswordEncoder.encode(password);
            System.out.println(encPassword);
            System.out.println(bCryptPasswordEncoder.encode(encPassword));
            System.out.println(loggedUser.get().getPassword());
            if(loggedUser.get().getPassword().equals(encPassword)){
                return loggedUser;
            }
        }
        return Optional.empty();
    }
}
