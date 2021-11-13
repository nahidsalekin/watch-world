import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const [reviewData, setReviewData] = useState({});
    const [success, setSuccess] = useState(false);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...reviewData }
        newProductData[field] = value;
        setReviewData(newProductData);
        console.log(reviewData)
    }
    const handleSubmit = e => {
        reviewData.name = user.displayName;
        reviewData.email = user.email;

        fetch('https://salty-basin-31603.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => setSuccess(true))
        console.log(reviewData)
        e.preventDefault();
    }
    return (
        <div>
            <h3 className="text-center">Add a Review</h3>
            {success &&
                <div className="alert alert-primary" role="alert">
                    Review Submitted succesfully!
                </div>
            }

            <form onSubmit={handleSubmit} className="row mx-0 d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">

                        <div className="row px-3">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">User Name</h6>
                            </label>
                            <input className="mb-4" type="text" value={user.displayName} disabled />
                        </div>
                        <div>
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Email Address</h6>
                            </label>
                            <input className="mb-4" type="email" value={user.email} disabled /> </div>

                        <div className="row px-3">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Give Rating (Number)</h6>
                            </label>
                            <input className="mb-4" type="number" onChange={handleOnChange} name="rating" placeholder="Enter rating" />
                        </div>
                        <div className="row px-3">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Feedback</h6>
                            </label>
                            <textarea name="feedback" onChange={handleOnChange} className="mb-4" cols="30" rows="10"></textarea>
                        </div>


                        <div className="row my-3 px-3 justify-content-center">
                            <button type="submit" className="btn btn-primary text-center">Submit Review</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddReview;