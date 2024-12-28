package com.registration_module.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.registration_module.demo.entity.AdmEntity;
import com.registration_module.demo.service.AdmService;

@RestController
@RequestMapping(value = "/Administrator")
public class AdmController {

    @Autowired
    AdmService admService;

    @GetMapping(value = "/{name}/{password}")
    public Optional<AdmEntity> SearchById(@PathVariable String name, String password) {
        Optional<AdmEntity> result = admService.SearchByCredentials(name, password);
        return result;
    }
}