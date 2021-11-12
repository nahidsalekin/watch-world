import React, { useEffect, useState } from 'react';
import Watch from '../../Watch/Watch';

const ManageProducts = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/watches?limit=${0}`)
            .then(res => res.json())
            .then(data => {
                setWatches(data)
            })
    }, []);

    const deleteItem = id => {
        if (window.confirm('Are you confirm to cancel this order?')) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    alert('Order deleted succesfully!');
                    const remaining = watches.filter(order => order._id !== id);
                    setWatches(remaining)
                    console.log(data)
                })
        }
        console.log(id)
    }
    return (
        <div className="mt-5 row mx-0 g-3 text-center">
            <h4>All Products: </h4>
            {
                watches.map((watch) => <Watch key={watch._id} watch={watch}></Watch>)
            }

        </div>
    );
};

export default ManageProducts;