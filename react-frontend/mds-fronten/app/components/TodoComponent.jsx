'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createProduct } from './api/TodoApiService';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function TodoComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id') || '-1'; // Fetch the ID from the query params

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    useEffect(() => {
        retrieveProducts();
    }, [id]);

    // Fetch product details by ID (if editing)
    function retrieveProducts() {
        if (id !== '-1') {
            retrieveProductById(id)
                .then((response) => {
                    setName(response.data.name);
                    setPrice(response.data.price);
                })
                .catch((error) => console.log(error));
        }
    }

    // Handle form submission
    function onSubmit(values) {
        const product = {
            name: values.name,
            price: values.price,
        };

        if (id === '-1') {
            createProduct(product)
                .then(() => {
                    router.push('/products'); // Navigate to products list
                })
                .catch((error) => console.log(error));
        }
    }

    // Validate form inputs
    function validate(values) {
        const errors = {};
        if (values.name.length < 2) {
            errors.name = 'Enter at least 2 characters';
        }
        if (values.price == null || values.price === '') {
            errors.price = 'Enter a valid price';
        }
        return errors;
    }

    return (
        <div className="container">
            <h1>Enter Product Details</h1>
            <div>
                <Formik
                    initialValues={{ name: name, price: price }}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {(props) => (
                        <Form>
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage
                                name="price"
                                component="div"
                                className="alert alert-warning"
                            />

                            <fieldset className="form-group">
                                <label>Product Name</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="name"
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Product Price</label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    name="price"
                                />
                            </fieldset>
                            <div>
                                <button
                                    className="btn btn-success m-5"
                                    type="submit"
                                >
                                    Save
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
