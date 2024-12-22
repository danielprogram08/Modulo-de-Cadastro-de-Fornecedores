package com.registration_module.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<AdmDTO> SearchById(@RequestBody Integer id) {
        try {
            AdmEntity result = repository.findById(id).orElseThrow();
            AdmDTO dto = new AdmDTO(result);
            return ResponseEntity.ok(dto);
        } catch (java.util.NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }
}