package com.registration_module.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.registration_module.demo.entity.AdmEntity;
import com.registration_module.demo.repository.AdmRepository;

@Service
public class AdmService {

    @Autowired
    private AdmRepository repository;

    @Transactional(readOnly = true)
    public Optional<AdmEntity> SearchByCredentials (String name, String password) { //Optional in case of the value be like empty;
        Optional<AdmEntity> result = Optional.ofNullable(repository.findByCredentials(name, password));
        return result;
    }
}