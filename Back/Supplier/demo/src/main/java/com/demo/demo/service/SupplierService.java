package com.demo.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.demo.Domain.Supplier;
import com.demo.demo.Domain.SupplierDTO;
import com.demo.demo.Projection.SupplierProjection;
import com.demo.demo.repository.SupplierRepository;

@Service
public class SupplierService {

    @Autowired
    private SupplierRepository repository;

    //Create Supplier;
    @Transactional
    public ResponseEntity<SupplierDTO> CreateSupplier (Supplier supplier) {
        try {
            SupplierDTO data = new SupplierDTO(supplier.getId(), supplier.getName(), supplier.getEmail(), supplier.getAddress(), supplier.getTelephone(), supplier.getCnpjCpf(), supplier.getCorporateReason());
            repository.save(data.convert());
            return ResponseEntity.status(HttpStatus.CREATED).body(data);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Search all suppliers;
    @Transactional(readOnly = true)
    public ResponseEntity<List<Supplier>> ListAllSuppliers () {
        try {
            List<Supplier> data = repository.findAll();
            if (!data.isEmpty()) { return ResponseEntity.status(HttpStatus.OK).body(data); }
            System.out.println("Nenhum Fornecedor cadastrado!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    //Search supplier by name;
    @Transactional(readOnly = true)
    public ResponseEntity<SupplierProjection> SearchByName (String name) {
        try {
            SupplierProjection data = repository.SearchByName(name);
            if (data == null) { return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); }
            return ResponseEntity.status(HttpStatus.OK).body(data);
        } catch (Exception e) {
            System.out.println("Fornecedor não encontrado!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    //Edit supplier;
    @Transactional
    public ResponseEntity<Void> EditSupplier (Supplier supplier) {
        try {
            repository.EditSupplier(supplier.getId(), supplier.getName(), supplier.getEmail(), supplier.getAddress(), supplier.getTelephone(), supplier.getCnpjCpf(), supplier.getCorporateReason());
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    //Delete Supplier;
    @Transactional
    public ResponseEntity<String> DeleteSupplierById (Long id) {
        try {
            Optional<Supplier> data = repository.findById(id);
            if (!data.isEmpty()) {
                repository.deleteById(id);
                return ResponseEntity.status(HttpStatus.OK).body("Supplier was deleted with sucess!");
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Supplier is not exists!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Error!");
        }
    }
}