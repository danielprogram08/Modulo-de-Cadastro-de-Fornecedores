package com.demo.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.demo.dto.SupplierDto;
import com.demo.demo.entity.SupplierEntity;
import com.demo.demo.repository.SupplierRepository;

@Service
public class SupplierService {

    @Autowired
    private SupplierRepository repository;

    //Create Supplier;
    @Transactional
    public SupplierDto CreateSupplier (SupplierEntity supplier) {
        if (supplier == null) {
            System.out.println("\n Supplier not register!");
            return null;
        } else {
            System.out.println("\n Supplier created with sucess!");
        }
        SupplierEntity data = repository.save(supplier);
        SupplierDto Supplier = new SupplierDto(data);
        return Supplier;
    }
}