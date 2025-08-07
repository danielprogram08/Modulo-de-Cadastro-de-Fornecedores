package com.demo.demo.Domain;

public record SupplierDTO(Long id, String name, String email, String address, String telephone, String cnpjCpf, String corporateReason) {

    public Supplier convert() {
        Supplier supplier = new Supplier();
        supplier.setName(name);
        supplier.setEmail(email);
        supplier.setAddress(address);
        supplier.setTelephone(telephone);
        supplier.setCnpjCpf(cnpjCpf);
        supplier.setCorporateReason(corporateReason);
        return supplier;
    }
}