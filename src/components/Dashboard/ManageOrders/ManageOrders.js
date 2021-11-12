import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [updateStatus, setUpdateStatus] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setOrders(data);

            })
    }, [updateStatus]);

    const deleteItem = id => {
        if (window.confirm('Are you confirm to delete this order?')) {
            fetch(`http://localhost:5000/orders/${id}`, {
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
    const shipItem = id => {

        if (window.confirm('Are you confirm to ship this order?')) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    alert('Order shipped succesfully!');
                    // const remaining = orders.filter(order => order._id !== id);
                    // setOrders(remaining)
                    setUpdateStatus(true)
                    console.log(data)
                })
        }
        console.log(id)
    }
    return (
        <div className="pt-5 text-center">
            <h4>Manage All Orders</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Purchased At</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.price}$</td>
                            <td>{order.date}</td>
                            <td>{order.status}</td>
                            <td>
                                <button className="btn btn-sm btn-danger" onClick={() => deleteItem(order._id)}>Delete</button>
                                <button className="ms-2 btn btn-sm btn-success" onClick={() => shipItem(order._id)}>Ship</button>
                            </td>
                        </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;