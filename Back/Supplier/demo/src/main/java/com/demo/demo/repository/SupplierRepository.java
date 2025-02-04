package com.demo.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.demo.demo.entity.SupplierEntity;

@Repository
public interface SupplierRepository extends JpaRepository<SupplierEntity, Long>{

    //Search by name;
    @Query(value = "SELECT * FROM suppliers WHERE LOWER(name) LIKE LOWER(CONCAT('%', :name ,'%'))", nativeQuery = true)
    String SearchByName (@Param("name") String name);

    //Edit Supplier;
    @Modifying
    @Query(value = "UPDATE suppliers SET name = :name, email = :email, address = :address, telephone = :telephone, cnpj_cpf = :CnpjCpf, corporate_reason = :CorporateReason WHERE id = :id", nativeQuery = true)
    void EditSupplier (@Param("id") Long id, @Param("name") String name, @Param("email") String email, @Param("address") String address, @Param("telephone") String telephone, @Param("CnpjCpf") String CnpjCpf, @Param("CorporateReason") String CorporateReason);
}