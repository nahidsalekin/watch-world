import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../hook/useAuth';
import Order from '../Order/Order';
const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else if (res.status === 401) {
                    history.push('/login')
                }
            })
            .then(data => {
                setOrders(data);
            })
    }, []);
    return (
        <div>
            <h4>Total orders: {orders.length}</h4>
            <table className="order-table table my-5">

                <tr>
                    <th>Event</th>
                    <th>Cost</th>
                    <th>Purchased at</th>
                </tr>

                {
                    orders.map(order => <Order key={order.id} order={order}></Order>)
                }

            </table>

        </div>
    );
};

export default Orders;