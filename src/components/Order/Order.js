import React from 'react';

const Order = ({ order }) => {
    return (
        <tr>
            <td>{order.name}</td>
            <td>{order.cost}</td>
            <td>{order.date}</td>
        </tr>
    );
};

export default Order;