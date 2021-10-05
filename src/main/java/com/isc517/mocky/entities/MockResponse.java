package com.isc517.mocky.entities;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.ManyToAny;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MockResponse implements Serializable {
    @Id
    @NonNull @Getter @Setter
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name = "mock_id", updatable = false, nullable = false)
    private String id;

    @NonNull @Getter @Setter
    private String route;

    @NonNull @Getter @Setter
    private String method;

    @NonNull @Getter @Setter
    private String headers;

    @NonNull @Getter @Setter
    private int responseCode;

    @NonNull @Getter @Setter
    private String contentType;

    @NonNull @Getter @Setter
    private String body;

    @NonNull @Getter @Setter
    private String endpointName;

    @NonNull @Getter @Setter
    private String endpointDescription;

    @NonNull @Getter @Setter
    private Expiration expirationTime;

    @NonNull @Getter @Setter
    private Date creationDate;

    @NonNull @Getter @Setter
    @ManyToOne
    @JoinColumn(name= "username",nullable = false)
    private User user;

}
