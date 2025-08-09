package com.demo.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.demo.Domain.SupplierDTO;
import com.demo.demo.Domain.Supplier;
import com.demo.demo.Projection.SupplierProjection;
import com.demo.demo.service.SupplierService;

@RestController
@RequestMapping(value = "/Supplier")
public class SupplierController {

    @Autowired
    SupplierService service;

    @PostMapping(value = "/Register")
    public ResponseEntity<SupplierDTO> CreateSupplier (@RequestBody Supplier supplier) {
        ResponseEntity<SupplierDTO> data = service.CreateSupplier(supplier);
        return data;
    }

    @GetMapping(value = "/SearchAll")
    public ResponseEntity<List<Supplier>> SearchAllSuppliers () {
        ResponseEntity<List<Supplier>> data = service.ListAllSuppliers();
        return data;
    }

    @GetMapping(value = "/SearchByName/{name}")
    public ResponseEntity<SupplierProjection> SearchByName (@PathVariable String name) {
        ResponseEntity<SupplierProjection> data = service.SearchByName(name);
        return data;
    }

    @PutMapping(value = "/Edit")
    public ResponseEntity<Void> EditSupplier (@RequestBody Supplier supplier) {
        ResponseEntity<Void> data = service.EditSupplier(supplier);
        return data;
    }

    @DeleteMapping(value = "/DeleteById/{id}")
    public ResponseEntity<String> DeleteSupplier (@PathVariable Long id) {
        ResponseEntity<String> data = service.DeleteSupplierById(id);
        return data;
    }
}