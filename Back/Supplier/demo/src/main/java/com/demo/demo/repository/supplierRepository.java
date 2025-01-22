package com.demo.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.demo.entity.supplierEntity;

@Repository
public interface supplierRepository extends JpaRepository<supplierEntity, Long>{

    @Modifying
    @Query(value = "INSERT INTO suppliers (name, email, address, telephone, cnpjcpf, CorporateReason) VALUES (:name, :email, :address, :telephone, :cnpjcpf, :corporatereason);", nativeQuery = true)

    int CreateSupplier(@Param("name") String name, @Param("email") String email, @Param("address") String address, @Param("telephone") String telephone, @Param("cnpjcpf") String cnpjcpf, @Param("corporatereason") String corporatereason);
}