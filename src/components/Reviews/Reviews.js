import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://salty-basin-31603.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, []);
    return (
        <div className="mt-5 row mx-0 g-3 text-center">
            <h4>All Reviews </h4>
            {
                reviews.map((review) => <div key={review._id} className="col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title"> <span className="text-info">{review.name}</span> <small>gave a feedback:</small> </h5>
                            <p className="card-text">{review.feedback}...</p>
                            <p className="card-text">Rating: {review.rating}</p>
                            <Rating
                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                                fractions={2}
                                initialRating={parseFloat(review.rating)}
                                readonly
                            />
                        </div>
                    </div>
                </div >)
            }

        </div>
    );
};

export default Reviews;