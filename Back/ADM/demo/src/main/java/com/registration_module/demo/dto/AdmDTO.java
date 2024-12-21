package com.registration_module.demo.dto;

import com.registration_module.demo.entity.AdmEntity;

public class AdmDTO {
    private Integer id;
    private String name;
    private String email;
    private String password;

    public AdmDTO () {
    }

    public AdmDTO (AdmEntity adm) {
        id = adm.getId();
        name = adm.getName();
        email = adm.getEmail();
        password = adm.getPassword();
    }

    public Integer getId() {
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