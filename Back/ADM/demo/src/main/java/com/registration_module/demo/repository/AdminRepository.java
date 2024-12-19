package com.registration_module.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.registration_module.demo.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>{
}