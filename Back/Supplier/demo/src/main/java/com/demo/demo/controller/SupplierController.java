package com.demo.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.demo.Projection.SupplierProjection;
import com.demo.demo.dto.SupplierDto;
import com.demo.demo.entity.SupplierEntity;
import com.demo.demo.service.SupplierService;

import jakarta.validation.Valid;

@RestController
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

    @GetMapping(value = "/SearchAll")
    public List<SupplierDto> SearchAllSuppliers () {
        List<SupplierDto> data = service.ListAllSuppliers();
        return data;
    }

    @GetMapping(value = "/SearchByName/{name}")
    public Optional<SupplierProjection> SearchByName (@PathVariable String name) {
        Optional<SupplierProjection> data = service.SearchByName(name);
        return data;
    }

    @PutMapping(value = "/Edit")
    public void EditSupplier (@RequestBody SupplierEntity supplier) {
        service.EditSupplier(supplier);
    }

    @DeleteMapping(value = "/DeleteById/{id}")
    public void DeleteSupplier (@PathVariable Long id) {
        service.DeleteSupplierById(id);
    }
}