package com.demo.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.demo.demo.service.supplierService;

@Controller
@RequestMapping(value = "/Supplier")
public class supplierController {

    @Autowired
    supplierService service;

    @PostMapping(value = "/{name}/{email}/{address}/{telephone}/{cnpjcpf}/{corporatereason}")
    public boolean createSupplier (@PathVariable String name, @PathVariable String email, @PathVariable String address, @PathVariable String telephone, @PathVariable String cnpjcpf, @PathVariable String corporatereason) {
        boolean result = service.CreateSupplier(name, email, address, telephone, cnpjcpf, corporatereason);
        return result;
    }
}