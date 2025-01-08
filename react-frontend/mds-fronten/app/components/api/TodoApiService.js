"use client";
import { apiClient } from './ApiClient'

// Fetch all products
export const retrieveAllProducts = async () => await apiClient.get('/products') ;

// Fetch a product by ID
export const retrieveProductById = async (id) =>  await apiClient.get(`/products/${id}`)
       

// Create a new product
export const createProduct =  async (product) =>  await apiClient.post('/products', product)


// Delete a product by ID
export const deleteProduct = async (id) =>  await apiClient.delete(`/products/${id}`)
    
