'use client';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { getAllProducts, createProduct, deleteProduct } from '../services/productService';
import { Product } from '../types';

export default function Home() {
  // Correctly typing the newProduct state
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<{ name: string; price: number }>({ name: '', price: 0 });

  useEffect(() => {
    // Fetch products on initial load
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async (event: FormEvent) => {
    event.preventDefault();
  
    if (!newProduct.name || newProduct.price <= 0) return;
  
    try {
      // Creating product without the 'id' field
      const createdProduct = await createProduct(newProduct); // Only passing name and price
      setProducts((prevProducts) => [...prevProducts, createdProduct]);
      setNewProduct({ name: '', price: 0 });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Shopping List</h1>

      {/* Add Product Form */}
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Product Price"
          required
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Product List */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
