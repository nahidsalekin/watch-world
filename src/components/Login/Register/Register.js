import '../Login.css'
import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData)
    }
    const handleSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="card form-banner border-0">
            {isLoading &&
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

            {!isLoading &&
                <form onSubmit={handleSubmit} className="row mx-0 d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-5">

                            <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Full Name</h6>
                            </label> <input className="mb-4" type="text" onKeyUp={handleonBlur} name="name" placeholder="Enter your Full Name" />
                            </div>
                            <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Email Address</h6>
                            </label> <input className="mb-4" type="email" onKeyUp={handleonBlur} name="email" placeholder="Enter a valid email address" />
                            </div>
                            <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Password</h6>
                            </label> <input type="password" onKeyUp={handleonBlur} name="password" placeholder="Enter password" />
                            </div>

                            <div className="row my-3 px-3 justify-content-center"> <button type="submit" className="btn btn-primary text-center">Login</button> </div>
                            <div className="row mb-4 px-3"> <small className="font-weight-bold">Already have an account? <Link to="/login" className="text-danger ">Login</Link></small> </div>
                        </div>
                    </div>
                </form>}

        </div>

    );
};

export default Register;