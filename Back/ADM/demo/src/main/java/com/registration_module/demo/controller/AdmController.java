package com.registration_module.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.registration_module.demo.dto.AdmDTO;
//import com.registration_module.demo.dto.AdmReplacePasswordDTO;
import com.registration_module.demo.service.AdmService;

@RestController
@RequestMapping(value = "/Administrator")
public class AdmController {

    @Autowired
    AdmService admService;

    @GetMapping(value = "/{name}/{password}")
    public Optional<AdmDTO> SearchById(@PathVariable String name, String password) {
        Optional<AdmDTO> result = admService.SearchByCredentials(name, password);
        return result;
    }

    /*@PutMapping("/edit")
    public ResponseEntity<String> replacePassword(@RequestBody AdmReplacePasswordDTO admReplacePassword) {
        try {
            admService.replacePassword(admReplacePassword); 
            return ResponseEntity.ok("Password updated with sucessfull!"); //status 200 OK with message;
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage()); //Exception with message;
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error ocurred!"); //Geral Exception, internal Error;
        }
    }*/
}