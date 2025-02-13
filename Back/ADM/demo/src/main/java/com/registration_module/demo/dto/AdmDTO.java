package com.registration_module.demo.dto;

import com.registration_module.demo.entity.AdmEntity;

public class AdmDTO {

    private Long id;
    private String name;
    private String password;

    public AdmDTO() {
    }

    public AdmDTO(AdmEntity entity) {
        id = entity.getId();
        name = entity.getName();
        password = entity.getPassword();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }
}