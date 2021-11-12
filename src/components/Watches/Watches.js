import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';

const Watches = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, []);
    return (
        <div className="mt-5 row mx-0 g-3 text-center">
            <h4>New Arrivals: </h4>
            {
                watches.map((watch) => <Watch key={watch._id} watch={watch}></Watch>)
            }

        </div>
    );
};

export default Watches;