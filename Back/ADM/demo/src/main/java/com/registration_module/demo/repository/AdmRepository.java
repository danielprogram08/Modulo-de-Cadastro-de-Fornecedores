package com.registration_module.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.registration_module.demo.entity.AdmEntity;
import com.registration_module.demo.projection.AdmProjection;

public interface AdmRepository extends JpaRepository<AdmEntity, Long> {
    @Query(value = "SELECT a.name, a.password FROM administrators a WHERE a.name = name AND a.password = password", nativeQuery = true)
    AdmProjection findByCredentials(String name, String password);

    @Modifying // to use the method INSERT, UPDATE and DELETE in the query.
    @Query(value = "UPDATE administrators a SET a.password = :newPassword WHERE a.name = :name", nativeQuery = true)
    int replacePassword(@Param("name") String name, @Param("newPassword") String newPassword);
}