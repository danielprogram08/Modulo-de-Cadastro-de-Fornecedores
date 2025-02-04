package com.demo.demo.service;

import java.util.List;
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
            SupplierEntity data = repository.save(supplier);
            SupplierDto Supplier = new SupplierDto(data);
            System.out.println("\n Supplier register with sucess! \n");
            return Optional.ofNullable(Supplier);   
        } catch (DataIntegrityViolationException e) {
            System.out.println("\n Supplier was register! \n");
            return Optional.empty();   
        }
    }

    //Search all suppliers;
    @Transactional(readOnly = true)
    public List<SupplierDto> ListAllSuppliers () {
        List<SupplierEntity> data = repository.findAll();
        return data.stream().map(x -> new SupplierDto(x)).toList();
    }

    //Search supplier by id;
    @Transactional(readOnly = true)
    public Optional<SupplierDto> SearchById (Long id) {
        if (repository.existsById(id)) {
            SupplierEntity data = repository.findById(id).get();
            SupplierDto supplier = new SupplierDto(data);
            return Optional.ofNullable(supplier);    
        } else {
            throw new RuntimeException("\n Supplier not exists! \n");
        }
    }

    //Search supplier by name;
    @Transactional(readOnly = true)
    public Optional<String> SearchByName (String name) {
        if (!repository.SearchByName(name).isEmpty()) {
            String data = repository.SearchByName(name);
            return Optional.ofNullable(data);    
        } else {
            throw new RuntimeException("\n Supplier not exists! \n");   
        }
    }

    //Edit supplier;
    @Transactional
    public void EditSupplier (SupplierEntity supplier) {
        repository.EditSupplier(supplier.getId(), supplier.getName(), supplier.getEmail(), supplier.getAddress(), supplier.getTelephone(), supplier.getCnpjCpf(), supplier.getCorporateReason());
    }

    //Delete Supplier;
    @Transactional
    public void DeleteSupplierById (Long id) {
        repository.deleteById(id);
    }
}