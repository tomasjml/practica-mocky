package com.isc517.mocky.entities;

import lombok.*;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {
    @Id
    @NonNull
    @Getter
    @Setter
    private String username;

    @NonNull
    @Getter
    @Setter
    private String password;

    @NonNull
    @Getter
    @Setter
    private String name;

    @NonNull
    @ElementCollection(targetClass = Roles.class,fetch = FetchType.EAGER)
    List<Roles> roles;

    @NonNull
    @Getter
    @Setter
    private boolean isAdministrator;
}
