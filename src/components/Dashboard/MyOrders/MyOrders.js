import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://salty-basin-31603.herokuapp.com/orders?email=${user.email}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setOrders(data);
            })
    }, []);

    const deleteItem = id => {
        if (window.confirm('Are you confirm to cancel this order?')) {
            fetch(`https://salty-basin-31603.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    alert('Order deleted succesfully!');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                    console.log(data)
                })
        }
        console.log(id)
    }
    return (
        <div className="pt-5 text-center">
            <h4>My Orders</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Purchased At</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => {
                            return <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.price}$</td>
                                <td>{order.date}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteItem(order._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;