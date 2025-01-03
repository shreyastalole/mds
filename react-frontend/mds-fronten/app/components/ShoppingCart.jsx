// "use client";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ShoppingCart = () => {
//     const [products, setProducts] = useState([]);
//     const [cart, setCart] = useState([]);
//     const [newProduct, setNewProduct] = useState({ name: '', price: '' });

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     const fetchProducts = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/products');
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };

//     const addProduct = async () => {
//         try {
//             await axios.post('http://localhost:8080/products', newProduct, {
//                 headers: { 'Content-Type': 'application/json' }
//             });
//             fetchProducts();
//             setNewProduct({ name: '', price: '' });
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };

//     const addToCart = (product) => {
//         setCart((prevCart) => {
//             const existingItem = prevCart.find(item => item.id === product.id);
//             if (existingItem) {
//                 return prevCart.map(item =>
//                     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//                 );
//             }
//             return [...prevCart, { ...product, quantity: 1 }];
//         });
//     };

//     const removeFromCart = (productId) => {
//         setCart(cart.filter(item => item.id !== productId));
//     };

//     const updateQuantity = (productId, quantity) => {
//         setCart(cart.map(item =>
//             item.id === productId ? { ...item, quantity: quantity } : item
//         ));
//     };

//     return (
//         <div>
//             <h1>Product List</h1>
//             <ul>
//                 {products.map(product => (
//                     <li key={product.id}>
//                         {product.name} - ${product.price}
//                         <button onClick={() => addToCart(product)}>Add to Cart</button>
//                     </li>
//                 ))}
//             </ul>

//             <h2>Add New Product</h2>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={newProduct.name}
//                 onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//             />
//             <input
//                 type="number"
//                 placeholder="Price"
//                 value={newProduct.price}
//                 onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//             />
//             <button onClick={addProduct}>Add Product</button>

//             <h1>Shopping Cart</h1>
//             <ul>
//                 {cart.map(item => (
//                     <li key={item.id}>
//                         {item.name} - ${item.price} x {item.quantity}
//                         <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//                         <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
//                         <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ShoppingCart;

// "use client";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ShoppingCart = () => {
//     const [products, setProducts] = useState([]);
//     const [cart, setCart] = useState([]);
//     const [newProduct, setNewProduct] = useState({ name: '', price: '' });
//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     const fetchProducts = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/products');
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };

//     const addProduct = async () => {
//         try {
//             await axios.post('http://localhost:8080/products', newProduct, {
//                 headers: { 'Content-Type': 'application/json' }
//             });
//             fetchProducts();
//             setNewProduct({ name: '', price: '' });
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };

//     const addToCart = (product) => {
//         setCart((prevCart) => {
//             const existingItem = prevCart.find(item => item.id === product.id);
//             if (existingItem) {
//                 return prevCart.map(item =>
//                     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//                 );
//             }
//             return [...prevCart, { ...product, quantity: 1 }];
//         });
//     };

//     const removeFromCart = (productId) => {
//         setCart(cart.filter(item => item.id !== productId));
//     };

//     const updateQuantity = (productId, quantity) => {
//         setCart(cart.map(item =>
//             item.id === productId ? { ...item, quantity: quantity } : item
//         ));
//     };

//     if (!isMounted) return null;

//     return (
//         <div>
//             <h1>Product List</h1>
//             <button onClick={fetchProducts}>Fetch Products</button>
//             <ul>
//                 {products.map(product => (
//                     <li key={product.id}>
//                         {product.name} - ${product.price}
//                         <button onClick={() => addToCart(product)}>Add to Cart</button>
//                     </li>
//                 ))}
//             </ul>

//             <h2>Add New Product</h2>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={newProduct.name}
//                 onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//             />
//             <input
//                 type="number"
//                 placeholder="Price"
//                 value={newProduct.price}
//                 onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//             />
//             <button onClick={addProduct}>Add Product</button>

//             <h1>Shopping Cart</h1>
//             <ul>
//                 {cart.map(item => (
//                     <li key={item.id}>
//                         {item.name} - ${item.price} x {item.quantity}
//                         <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//                         <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
//                         <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ShoppingCart;

"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShoppingCart = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '' });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const addProduct = async () => {
        try {
            await axios.post('http://localhost:8080/products', newProduct, {
                headers: { 'Content-Type': 'application/json' }
            });
            fetchProducts();
            setNewProduct({ name: '', price: '' });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCart(cart.map(item =>
            item.id === productId ? { ...item, quantity: quantity } : item
        ));
    };

    if (!isMounted) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Product List</h1>
            <button onClick={fetchProducts}>Fetch Products</button>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>

            <h2>Add New Product</h2>
            <input
                type="text"
                placeholder="Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <button onClick={addProduct}>Add Product</button>

            <h1>Shopping Cart</h1>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
