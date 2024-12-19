package com.registration_module.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.registration_module.demo.dto.AdminDTO;
import com.registration_module.demo.entity.Admin;
import com.registration_module.demo.repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository admin;

    @Transactional(readOnly = true)
    public AdminDTO SearchById(Integer id) {
        Admin result = admin.findById(id).get();
        AdminDTO dto = new AdminDTO(result);
        return dto;
    }
}
