import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnChange = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user)
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true)
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="text-center">Make an Admin</h2>
            {success &&
                <div className="alert alert-primary" role="alert">
                    Admin created succesfully!
                </div>
            }
            <form className="mt-3 d-flex justify-content-center" onSubmit={handleAdminSubmit}>
                <input
                    type="email"
                    onKeyUp={handleOnChange}
                    className="w-50 me-3" />

                <button type="submit" className="btn btn-primary">Make Admin</button>
            </form>

        </div>
    );
};

export default MakeAdmin;