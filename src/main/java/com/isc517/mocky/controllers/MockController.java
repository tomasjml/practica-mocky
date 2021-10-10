package com.isc517.mocky.controllers;

import com.isc517.mocky.entities.MockResponse;
import com.isc517.mocky.services.MockResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/mock")
public class MockController {
    @Autowired
    private MockResponseService mockService;


    @GetMapping("/all/{user}")
    public List<MockResponse> getAllMocksByUsername(@PathVariable("user") String username){
        return mockService.getAllMocksByUser(username);
    }

    @GetMapping("/{id}")
    public MockResponse getMockEntity(@PathVariable("id") String id){
        return mockService.getMockEntity(id);
    }

    @GetMapping("/response/{id}")
    public ResponseEntity getMockResponse(@PathVariable("id") String id){
        return mockService.getMockResponse(id);
    }

    @PostMapping("/add")
    public MockResponse postMockEntity(@RequestBody MockResponse newMock){
        return mockService.createMock(newMock);
    }

    @PutMapping("/update")
    public ResponseEntity updateMockEntity(@RequestBody MockResponse newMock){
        return mockService.updateMock(newMock);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMockEntity(@PathVariable("id") String id){
        return mockService.deleteMock(id);
    }


}
