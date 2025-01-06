'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { retrieveAllProducts, deleteProduct } from './api/TodoApiService';

export default function ListTodosComponent() {
    const router = useRouter(); // useRouter for navigation
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        refreshProducts();
    }, []);

    // Fetch all products
    function refreshProducts() {
        retrieveAllProducts()
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => console.log(error));
    }

    // Delete a product
    function deleteProd(id) {
        deleteProduct(id)
            .then(() => {
                setMessage(`Delete of item with id = ${id} successful`);
                refreshProducts();
            })
            .catch((error) => console.log(error));
    }

    // Navigate to add new product page
    function addNewProduct() {
        router.push('/products/-1');
    }

    return (
        <div className="container">
            <h1>Things You Want To Buy!</h1>

            {message && <div className="alert alert-warning">{message}</div>}

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => deleteProd(product.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewProduct}>
                Add New Item
            </div>
        </div>
    );
}
