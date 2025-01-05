"use client";
import { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { createProduct } from './api/TodoApiService'
import { useAuth } from './security/AuthContext'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import moment from 'moment'

export default function TodoComponent() {
    
    const {id} = useParams()
    
    const[name, setName] = useState('')
    const[price, setPrice] = useState(0)

    const navigate = useNavigate()
    
    
    useEffect(
        () => retrieveProducts(),
        [id]
        )

    function retrieveProducts(){
        if(id != -1) {
            retrieveProductById(id)
            .then(response => {
                setName(response.data.name)
                setPrice(response.data.price)
            })
            .catch(error => console.log(error))
        }
    }

    function onSubmit(values) {
        console.log(values)
        
        const product = {
            // id: id,
            name: values.name,
            price: values.price,
        }

        console.log(product)

        if(id==-1) {
            createProduct(product)
            .then(response => {
                navigate('/products')
            })
            .catch(error => console.log(error))
        }
        // } else {
        //     updateTodoApi(username, id, todo)
        //     .then(response => {
        //         navigate('/todos')
        //     })
        //     .catch(error => console.log(error)) }
    }

    function validate(values) {
        let errors = {
            // description: 'Enter a valid description',
            // targetDate: 'Enter a valid target date'
        }

        if(values.name.length<2) {
            errors.name = 'Enter atleast 2 characters'
        }

        if(values.price == null || values.price=='' || !moment(values.price).isValid()) {
            errors.targetDate = 'Enter a price'
        }

        console.log(values)
        return errors
    }

    return (
        <div className="container">
            <h1>Enter Todo Details </h1>
            <div>
                <Formik initialValues={ {name:name, price:price}  }
                    enableReinitialize = {true}
                    onSubmit = {onSubmit}
                    validate = {validate}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage 
                                name=" name"
                                component="div"
                                className = "alert alert-warning"
                            />
                            
                            <ErrorMessage 
                                name="price"
                                component="div"
                                className = "alert alert-warning"
                            />

                            <fieldset className="form-group">
                                <label>Product Name</label>
                                <Field type="text" className="form-control" name="name" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Product Price</label>
                                <Field type="number" className="form-control" name="price"/>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </div>

        </div>
    )
}