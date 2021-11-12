import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
const WatchDetail = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const history = useHistory();
    const [watch, setWatch] = useState({});
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/watches/${id}`)
            .then(res => res.json())
            .then(data => setWatch(data))
    }, []);

    const handleonChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...order }
        newOrder[field] = value;
        setOrder(newOrder);
    }

    const newDate = new Date();
    const handleOnSubmit = e => {
        let data = {};
        data.email = user.email;
        data.id = watch._id;
        data.name = watch.name;
        data.price = watch.price;
        data.date = newDate;
        data.address = order.address;
        data.number = order.number;
        data.status = 'pending';
        data.username = order.username ? order.name : user.displayName;

        axios.post('http://localhost:5000/place_order', data)
            .then(res => {
                if (res.data.insertedId)
                    alert('successfully booked your order');
            });

        history.push('/');
        e.preventDefault();
    };
    return (
        <div className="row mx-0 my-5 justify-content-between">
            <div className="col-md-5 shadow p-3">
                <img src={watch.img} height="200" width="150" className="mx-auto d-block" alt="" />
                <h5 className="">{watch.name}</h5>
                <p className="text-secondary">{watch.short_desc}</p>
                <p className="">Price: {watch.price}$</p>
            </div>


            <div className="col-md-6">
                <h4>Please provide these information to confirm purchase</h4>
                <form onSubmit={handleOnSubmit} className="row mx-0 d-flex p-3">

                    <div>
                        <label className="mb-1">
                            <h6 className="mb-0 text-sm">Name</h6>
                        </label>
                        <input className="mb-4" type="text" defaultValue={user.displayName} onChange={handleonChange} name="username" placeholder="Enter your fullname" />
                    </div>
                    <div>
                        <label className="mb-1">
                            <h6 className="mb-0 text-sm">Email Address</h6>
                        </label>
                        <input className="mb-4" type="email" value={user.email} disabled /> </div>

                    <div>
                        <label className="mb-1">
                            <h6 className="mb-0 text-sm">Phone Number</h6>
                        </label>
                        <input className="mb-4" type="text" onChange={handleonChange} name="number" placeholder="Enter your Phone Number" /> </div>

                    <div className="mb-3"> <label className="mb-1">
                        <h6 className="mb-0 text-sm">Address</h6>
                    </label> <input type="text" onChange={handleonChange} name="address" placeholder="Enter your address" />
                    </div>
                    <button type="submit" className="btn btn-primary text-center">Confirm Purchase</button>
                </form>
            </div>
        </div>
    );
};

export default WatchDetail;