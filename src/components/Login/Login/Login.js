import '../Login.css'
import { React, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, loginUser, isLoading, authError, googleSignIn } = useAuth();
    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const location = useLocation();
    const history = useHistory();
    const handleSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div className="card form-banner border-0">
            {isLoading && <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}

            <form onSubmit={handleSubmit} className="row mx-0 d-flex">
                <div className="col-lg-6">
                    <div className="card1 pb-5">

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">
                        <div className="mb-4 px-3 d-flex justify-content-center">
                            <h6 className="mb-0 me-4 mt-2">Sign in with</h6>
                            <button type="button" onClick={googleSignIn} className="btn text-center btn-primary">
                                <i className="rounded-circle fa fa-google"></i>
                            </button>
                        </div>
                        <div className="row px-3 mb-4">
                            <div className="line"></div> <small className="or text-center">Or</small>
                            <div className="line"></div>
                        </div>
                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Email Address</h6>
                        </label> <input className="mb-4" type="text" onBlur={handleOnBlur} name="email" placeholder="Enter a valid email address" /> </div>
                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Password</h6>
                        </label> <input type="password" onBlur={handleOnBlur} name="password" placeholder="Enter password" />
                        </div>

                        <div className="row my-3 px-3 justify-content-center"> <button type="submit" className="btn btn-primary text-center">Login</button> </div>
                        <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <Link to="/register" className="text-danger ">Register</Link></small> </div>
                    </div>
                </div>
            </form>

        </div>

    );
};

export default Login;