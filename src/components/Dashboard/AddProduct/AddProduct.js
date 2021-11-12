import React, { useState } from 'react';

const AddProduct = () => {

    const [productData, setProductData] = useState({});
    const [success, setSuccess] = useState(false);
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...productData }
        newProductData[field] = value;
        setProductData(newProductData);
        console.log(productData)
    }
    const handleSubmit = e => {

        fetch('http://localhost:5000/watches', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => setSuccess(true))
        console.log(productData)
        e.preventDefault();
    }
    return (
        <div>
            <h3 className="text-center">Add a new product</h3>
            {success &&
                <div className="alert alert-primary" role="alert">
                    Product Added succesfully!
                </div>
            }

            <form onSubmit={handleSubmit} className="row mx-0 d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">

                        <div className="row px-3">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Product Name</h6>
                            </label>
                            <input className="mb-4" type="text" onKeyUp={handleOnChange} name="name" placeholder="Enter product Name" />
                        </div>
                        <div className="row px-3">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Short Description</h6>
                            </label>
                            <textarea name="short_desc" onKeyUp={handleOnChange} className="mb-4" cols="30" rows="10"></textarea>
                        </div>
                        <div className="row px-3">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Price</h6>
                            </label>
                            <input className="mb-4" type="text" onKeyUp={handleOnChange} name="price" placeholder="Enter Price" />
                        </div>
                        <div className="row px-3">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Product Image</h6>
                            </label>
                            <input className="mb-4" type="text" onKeyUp={handleOnChange} name="img" placeholder="Enter image link" />
                        </div>


                        <div className="row my-3 px-3 justify-content-center">
                            <button type="submit" className="btn btn-primary text-center">Add Product</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;