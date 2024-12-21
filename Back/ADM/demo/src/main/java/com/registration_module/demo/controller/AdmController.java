package com.registration_module.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.registration_module.demo.dto.AdmDTO;
import com.registration_module.demo.service.AdmService;

@RestController
@RequestMapping(value = "/Administrator")
public class AdmController {

    @Autowired
    AdmService admService;

    @GetMapping(value = "/{id}")
    public AdmDTO SearchById(@PathVariable Integer id) {
        AdmDTO result = admService.SearchById(id);
        return result;
    }
}