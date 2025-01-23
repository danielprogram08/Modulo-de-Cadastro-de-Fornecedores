package com.demo.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
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
    public Optional<SupplierDto> CreateSupplier (SupplierEntity supplier) {
        try {
            if (supplier.getName().isEmpty() || supplier.getEmail().isEmpty() || supplier.getAddress().isEmpty() || supplier.getTelephone().isEmpty() || supplier.getCnpjCpf().isEmpty() || supplier.getCorporateReason().isEmpty()) {
            System.out.println("\n Supplier not register because is empty! \n");
            return Optional.empty();
        } else {
            SupplierEntity data = repository.save(supplier);
            SupplierDto Supplier = new SupplierDto(data);
            System.out.println("\n Supplier register with sucess! \n");
            return Optional.ofNullable(Supplier);
        }    
        } catch (DataIntegrityViolationException e) {
            System.out.println("\n Supplier was register! \n");
            return Optional.empty();   
        }
    }
}