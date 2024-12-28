package com.registration_module.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "administrators")
public class AdmEntity {

    @Id
    @Column(columnDefinition = "VARCHAR(40)", nullable = false)
    private String name;

    @Column(columnDefinition = "VARCHAR(16)", nullable = false)
    private String password;

    public AdmEntity () {
    }

    public AdmEntity (String name, String password) {
        //this.id = id;
        this.name = name;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}