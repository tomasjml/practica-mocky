package com.isc517.mocky.services;

import com.google.gson.Gson;
import com.isc517.mocky.entities.MockResponse;
import com.isc517.mocky.repositories.MockResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;


import java.util.Map;
import java.util.Optional;

@Service
public class MockResponseService {

    @Autowired
    private MockResponseRepository mockRepo;
    private static final Gson gson = new Gson();


    public Optional<MockResponse> getMockResponse(String id){
        Optional<MockResponse> response = mockRepo.findById(id);
        return response;
    }

    public ResponseEntity<String> createResponse(MockResponse mock){
        HttpStatus status = HttpStatus.valueOf(mock.getStatusCode());
        HttpMethod method = HttpMethod.resolve(mock.getMethod());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.valueOf(mock.getContentType()));

        MultiValueMap<String,String> headersMap = gson.fromJson(mock.getHeaders(),MultiValueMap.class);
        headers.addAll(headersMap);

        return ResponseEntity.status(status).headers(headers).body(mock.getBody());
    }
}
