package com.spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.model.ProductModel;
import com.spring.repository.ProductInterface;

@Service
public class ProductService {
	
	@Autowired
	private ProductInterface pinterface;

	public ProductModel addProduct(ProductModel p1) 
	{
		return pinterface.save(p1);
	}

	public ProductModel updateProduct(ProductModel p1) 
	{
		return pinterface.save(p1);
	}

	public void deleteProduct(ProductModel id) 
	{
		pinterface.delete(id);
	}

	public List<ProductModel> fetchProduct() 
	{
		return pinterface.findAll();
	}
}
