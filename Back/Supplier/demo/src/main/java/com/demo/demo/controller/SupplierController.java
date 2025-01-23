package com.demo.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<SupplierDto> CreateSupplier (@Valid @RequestBody SupplierEntity supplier) {
        Optional<SupplierDto> Supplier = service.CreateSupplier(supplier);
        if (Supplier.isPresent()) {
            return ResponseEntity.ok(Supplier.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}