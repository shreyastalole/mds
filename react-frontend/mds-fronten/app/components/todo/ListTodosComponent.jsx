"use client";
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import {retrieveAllProducts,  deleteProduct} from './api/TodoApiService'



function ListTodosComponent() {


    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    const [message,setMessage] = useState(null)
    
    useEffect ( () => refreshProducts(), [])

    function refreshProducts() {
        
        retrieveAllProducts()
        .then(response => {
            setProducts(response.data)
        }
            
        )
        .catch(error => console.log(error))
    
    }

    function deleteProd(id) {
        console.log('clicked ' + id)
        deleteProduct( id)
        .then(
            //1: Display message
            //2: Update Todos list
            () => {
                setMessage(`Delete of item with id = ${id} successful`)
                refreshProducts()
            }

        )
        .catch(error => console.log(error))
    }

    // function updateTodo(id) {
    //     console.log('clicked ' + id)
    //     navigate(`/todo/${id}`)
    // }

    function addNewProduct() {
        navigate(`/products/-1`)
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
                    {
                        products.map(
                            product => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    {/* <td>{todo.targetDate.toString()}</td> */}
                                    <td> <button className="btn btn-warning" 
                                                    onClick={() => deleteProd(product.id)}>Delete</button> </td>
                                    {/* <td> <button className="btn btn-success" 
                                                    onClick={() => updateTodo(todo.id)}>Update</button> </td> */}
                                </tr>
                            )
                        )
                    }
                    </tbody>

                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewProduct}>Add New Item</div>
        </div>
    )
}

export default ListTodosComponent