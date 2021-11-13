import React from 'react';
import { Link } from 'react-router-dom';


const Watch = ({ watch, type, action }) => {
    console.log(action)
    return (
        <div className="col-md-4">
            <div className="card h-100">
                <img src={watch.img} height="200" width="150" className="mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                        <Link className="card-text" to={`/watch_detail/${watch._id}`}>{watch.name}</Link>
                    </h5>
                    <p className="card-text">{watch.short_desc.substring(0, 120)}...</p>
                    <p className="card-text">Cost: {watch.price}$</p>
                    {type === 'delete' ?
                        <button type="button" onClick={() => action(watch._id)} className="btn btn-danger">Delete</button>
                        :
                        <Link className="btn btn-primary" to={`/watch_detail/${watch._id}`}>Buy Now</Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default Watch;