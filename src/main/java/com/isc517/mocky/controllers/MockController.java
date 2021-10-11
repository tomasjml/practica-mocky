package com.isc517.mocky.controllers;

import com.isc517.mocky.entities.MockResponse;
import com.isc517.mocky.services.MockResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;
import java.util.Objects;

@RestController
@RequiredArgsConstructor
@RequestMapping("/mock")
public class MockController {
    @Autowired
    private MockResponseService mockService;

    // ENTITY CRUD

    @GetMapping("/all/{user}")
    public List<MockResponse> getAllMocksByUsername(@PathVariable("user") String username){
        return mockService.getAllMocksByUser(username);
    }

    @GetMapping("/{id}")
    public MockResponse getMockEntity(@PathVariable("id") String id){
        return mockService.getMockEntity(id);
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

    // MOCKS REQUESTS

    @RequestMapping (value = "/response/{id}", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
    RequestMethod.PUT, RequestMethod.OPTIONS})
    public ResponseEntity getMockResponse(@PathVariable("id") String id, HttpServletRequest request, HttpServletResponse response)
            throws IOException
    {

        String method = mockService.getMethodById(id);
        if(Objects.equals(request.getMethod(), method)){
            String url;
            switch (method){
                case "GET":
                    url = "/response/get";
                    break;
                case "POST":
                    url ="/response/post";
                    break;
                case "PUT":
                    url ="/response/put";
                    break;
                case "DELETE":
                    url ="/response/delete";
                    break;
                case "OPTIONS":
                    url ="/response/options";
                    break;
                default:
                    url ="/response/get";
            }

            request.getSession().setAttribute("id", id);
            response.sendRedirect(url);
        }



        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Mock Not Found");
    }


    // REDIRECCIONAMIENTOS
    @RequestMapping(value ="/response/get", method = RequestMethod.GET)
    public ResponseEntity getRequest(HttpServletRequest request){
        String id = (String) request.getSession().getAttribute("id");
        return mockService.getMockResponse(id);
    }

    @RequestMapping(value ="/response/post", method = RequestMethod.POST)
    public ResponseEntity postRequest(HttpServletRequest request){
        String id = (String) request.getSession().getAttribute("id");
        return mockService.getMockResponse(id);
    }

    @RequestMapping(value ="/response/delete", method = RequestMethod.DELETE)
    public ResponseEntity deleteRequest(HttpServletRequest request){
        String id = (String) request.getSession().getAttribute("id");
        return mockService.getMockResponse(id);
    }

    @RequestMapping(value ="/response/put", method = RequestMethod.PUT)
    public ResponseEntity putRequest(HttpServletRequest request){
        String id = (String) request.getSession().getAttribute("id");
        return mockService.getMockResponse(id);
    }

    @RequestMapping(value ="/response/options", method = RequestMethod.OPTIONS)
    public ResponseEntity optionsRequest(HttpServletRequest request){
        String id = (String) request.getSession().getAttribute("id");
        return mockService.getMockResponse(id);
    }




}
