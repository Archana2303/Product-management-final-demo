package com.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.model.ProductModel;

@Repository
public interface ProductInterface extends JpaRepository<ProductModel, Long> {

}
