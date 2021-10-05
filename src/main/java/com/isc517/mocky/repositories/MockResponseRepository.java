package com.isc517.mocky.repositories;

import com.isc517.mocky.entities.MockResponse;
import com.isc517.mocky.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface MockResponseRepository extends JpaRepository<MockResponse, String> {
}
