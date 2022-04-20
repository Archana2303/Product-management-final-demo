package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.model.ProductModel;
import com.spring.services.ProductService;

@RestController
public class ProductController {

	@Autowired
	private ProductService pservice;
	
	@PostMapping("/add")
	@CrossOrigin(origins = "http://localhost:4200")
	public ProductModel addService(@RequestBody ProductModel e1) {
		return pservice.addProduct(e1);
	}
	
	@PostMapping("/update")
	@CrossOrigin(origins = "http://localhost:4200")
	public ProductModel updateService(@RequestBody ProductModel e1) {
		return pservice.updateProduct(e1);
	}
	
	@PostMapping("/delete")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteService(@RequestBody ProductModel id) {
		pservice.deleteProduct(id);
	}
	
	@GetMapping("/fetch")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<ProductModel> fetchService(){
		return pservice.fetchProduct();
	}
}
