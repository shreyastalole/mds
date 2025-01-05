"use client";
import { apiClient } from './ApiClient'

// Fetch all products
export const retrieveAllProducts = () => apiClient.get('/products') ;

// Fetch a product by ID
export const retrieveProductById = (id) =>  apiClient.get(`/products/${id}`)
       

// Create a new product
export const createProduct =  (product) =>  apiClient.post('/products', product)


// Delete a product by ID
export const deleteProduct = (id) =>  apiClient.delete(`/products/${id}`)
    
