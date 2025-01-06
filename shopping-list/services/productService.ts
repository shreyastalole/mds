// services/productService.ts

import axios from 'axios';
import { Product } from '../types';

// Define the base URL of your Quarkus API (adjust if running in Codespaces or elsewhere)
// const BASE_URL = 'http://localhost:8080/products';
// const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL + '/products';
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ? process.env.NEXT_PUBLIC_BACKEND_URL + '/products' : 'http://backend:8080/products';
console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL);


export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const createProduct = async (product: { name: string; price: number }): Promise<Product> => {
    try {
      console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL);
      const response = await axios.post<Product>(BASE_URL, product);
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  };

export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
