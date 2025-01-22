package com.demo.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.demo.repository.supplierRepository;

@Service
public class supplierService {

    @Autowired
    private supplierRepository repository;

    //Create Supplier;
    @Transactional
    public boolean CreateSupplier (String name, String email, String address, String telephone, String cnpjcpf, String corporatereason) {
        if (name == null || name.trim().isEmpty() || email == null || email.trim().isEmpty() || address == null || address.trim().isEmpty() || telephone == null || telephone.trim().isEmpty() || cnpjcpf == null || cnpjcpf.trim().isEmpty() || corporatereason == null || corporatereason.trim().isEmpty()) {
            System.out.println("Empty or Null");
            return false;
        }
        int updatedRows = repository.CreateSupplier(name, email, address, telephone, cnpjcpf, corporatereason);
        if (updatedRows == 0) {
            System.out.println("\n supplier not created!");
            return false;
        } else {
            System.out.println("\n supplier created with sucess!");
        }
        return true;
    }
}