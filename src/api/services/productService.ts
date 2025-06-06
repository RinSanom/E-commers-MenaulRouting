import { Product, ProductsResponse } from "../models/productModel"

export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: ProductsResponse = await response.json();
    console.log(" data product in service", data)
    return data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export async function fetchProductById(id: number): Promise<any> {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`Product with ID ${id} not found`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch product by ID failed:", error);
    return null;
  }
}
