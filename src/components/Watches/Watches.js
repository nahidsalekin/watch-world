import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Watch from '../Watch/Watch';

const Watches = () => {
    const [watches, setWatches] = useState([]);
    const location = useLocation();
    const limit = (location.pathname === '/' || location.pathname === '/home') ? 6 : 0;
    const heading = (location.pathname === '/' || location.pathname === '/home') ? 'New Arrivals' : 'All Products';

    console.log(location.pathname, limit)
    useEffect(() => {
        fetch(`http://localhost:5000/watches?limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setWatches(data)
            })
    }, []);
    return (
        <div className="mt-5 row mx-0 g-3 text-center">
            <h4>{heading}: </h4>
            {
                watches.map((watch) => <Watch key={watch._id} watch={watch}></Watch>)
            }

        </div>
    );
};

export default Watches;