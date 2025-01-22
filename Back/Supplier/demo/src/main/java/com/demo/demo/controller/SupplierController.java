package com.demo.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.demo.demo.dto.SupplierDto;
import com.demo.demo.entity.SupplierEntity;
import com.demo.demo.service.SupplierService;

import jakarta.validation.Valid;

@Controller
@RequestMapping(value = "/Supplier")
public class SupplierController {

    @Autowired
    SupplierService service;

    @PostMapping(value = "/Register")
    public SupplierDto CreateSupplier (@Valid @RequestBody SupplierEntity supplier) {
        SupplierDto Supplier = service.CreateSupplier(supplier);
        return Supplier;
    }
}