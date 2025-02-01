package com.registration_module.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.registration_module.demo.dto.AdmDTO;
import com.registration_module.demo.service.AdmService;

@RestController
@RequestMapping(value = "/Administrator")
public class AdmController {

    @Autowired
    AdmService admService;

    @GetMapping(value = "/{name}/{password}")
    public Optional<AdmDTO> SearchByCredentials (@PathVariable String name, @PathVariable String password) {
        Optional<AdmDTO> result = admService.SearchByCredentials(name, password);
        return result;
    }

    @PutMapping(value = "/{name}/{newPassword}")
    public boolean replacePassword (@PathVariable String name, @PathVariable String newPassword) {
        boolean updated = admService.replacePassword(name, newPassword);
        return updated;
    }
}