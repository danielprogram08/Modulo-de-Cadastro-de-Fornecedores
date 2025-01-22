package com.demo.demo.dto;

import com.demo.demo.entity.SupplierEntity;

public class SupplierDto {

    private Long id;
    private String name;
    private String email;
    private String address;
    private String telephone;
    private String cnpjCpf;
    private String corporateReason;

    public SupplierDto(SupplierEntity supplier) {
        this.id = supplier.getId();
        this.name = supplier.getName();
        this.email = supplier.getEmail();
        this.address = supplier.getAddress();
        this.telephone = supplier.getTelephone();
        this.cnpjCpf = supplier.getCnpjCpf();
        this.corporateReason = supplier.getCorporateReason();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getAddress() {
        return address;
    }

    public String getTelephone() {
        return telephone;
    }

    public String getCnpjCpf() {
        return cnpjCpf;
    }

    public String getCorporateReason() {
        return corporateReason;
    }
}