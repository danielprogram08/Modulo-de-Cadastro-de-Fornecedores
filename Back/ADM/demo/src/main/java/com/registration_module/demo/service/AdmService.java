package com.registration_module.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.registration_module.demo.dto.AdmDTO;
import com.registration_module.demo.repository.AdmRepository;

@Service
public class AdmService {

    @Autowired
    private AdmRepository repository;

    @Transactional(readOnly = true)
    public Optional<AdmDTO> SearchByCredentials (String name, String password) { //Optional in case of the value be like empty;
        Optional<AdmDTO> result = Optional.ofNullable(repository.findByCredentials(name, password));
        if (!result.isPresent()) {
            System.out.println("\n Administrator not found!");
        }
        return result;
    }

    @Transactional //Transactional to write too;
    public Boolean replacePassword (String name, String newPassword) {
        if (name == null || name.trim().isEmpty()) {
            System.out.println("\n Administrator`s name is incorrect!");
            return false;
        }

        int updatedRows = repository.replacePassword(name, newPassword);
        
        if (updatedRows == 0) {
            System.out.println("\n password not edited!");
            return false;
        } else {
            System.out.println("\n password edited with sucess!");
        }
        return true;
    }
}