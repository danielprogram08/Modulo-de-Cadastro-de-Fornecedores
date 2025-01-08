package com.registration_module.demo.dto;

public class AdmReplacePasswordDTO {

    private String name;
    private String password;

    public AdmReplacePasswordDTO () {}

    public AdmReplacePasswordDTO (AdmDTO dto) {
        name = dto.getName();
        password = dto.getPassword();
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }
}