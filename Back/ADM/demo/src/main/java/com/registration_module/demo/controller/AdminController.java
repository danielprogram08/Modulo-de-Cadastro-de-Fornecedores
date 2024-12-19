package com.registration_module.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.registration_module.demo.dto.AdminDTO;
import com.registration_module.demo.service.AdminService;

@RestController
@RequestMapping(value = "/Admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping(value = "/{id}")
    public AdminDTO SearchById(@PathVariable Integer id) {
        AdminDTO result = adminService.SearchById(id);
        return result;
    }
}