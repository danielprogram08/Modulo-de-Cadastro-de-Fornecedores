package com.registration_module.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.registration_module.demo.entity.AdmEntity;

public interface AdmRepository extends JpaRepository<AdmEntity, Integer>{
}