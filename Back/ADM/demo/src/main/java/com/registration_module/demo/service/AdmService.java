package com.registration_module.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import com.registration_module.demo.dto.AdmDTO;
import com.registration_module.demo.entity.AdmEntity;
import com.registration_module.demo.repository.AdmRepository;

@Service
public class AdmService {

    @Autowired
    private AdmRepository repository;

    @Transactional(readOnly = true)
    public AdmDTO SearchById(@RequestBody Integer id) {
        AdmEntity result = repository.findById(id).get();
        AdmDTO dto = new AdmDTO(result);
        return dto;
    }
}