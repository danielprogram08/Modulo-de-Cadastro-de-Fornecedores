package com.registration_module.demo.dto;

import com.registration_module.demo.entity.Admin;

public class AdminDTO {
    private Integer id;
    private String name;
    private String email;
    private String password;

    public AdminDTO () {
    }

    public AdminDTO (Admin admin) {
        id = admin.getId();
        name = admin.getName();
        email = admin.getEmail();
        password = admin.getPassword();
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}