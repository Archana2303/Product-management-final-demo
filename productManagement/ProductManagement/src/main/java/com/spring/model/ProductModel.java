package com.spring.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product_data")
public class ProductModel {
	
	@Id
	private long product_id;
	private String product_name;
	private String category;
	private double price;
	
	public ProductModel() {
	}
	
	public ProductModel(int product_id, String product_name, String category, double price) {
		super();
		this.product_id = product_id;
		this.product_name = product_name;
		this.category = category;
		this.price = price;
	}
	
	public long getProduct_id() {
		return product_id;
	}
	public void setProduct_id(long product_id) {
		this.product_id = product_id;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}

}
