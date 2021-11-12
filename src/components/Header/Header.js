import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import useAuth from '../hook/useAuth';
const Header = () => {
    const { user, logout } = useAuth();

    return (

        <nav className="navbar navbar-expand-lg bg-transparent shadow py-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img src="https://st4.depositphotos.com/17797916/19995/v/450/depositphotos_199955074-stock-illustration-share-smart-watch-icon-logo.jpg" height="50" width="100" alt="" />
                    Watchy World</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>

                        {!user?.email &&
                            <li>
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        }
                        {user?.email &&
                            <li class="nav-item dropdown">
                                <div class="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.displayName}
                                    <img class="ms-2 rounded-circle" src={user.photoURL}
                                        width="40" height="40" alt="" />
                                </div>
                                <ul class="dropdown-menu border-0 shadow" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="nav-link" to="/orders">My Order</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/manage_order">Manage Orders</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/Add Event">Add Service</Link>
                                    </li>
                                    <li>
                                        <button onClick={logout} class="dropdown-item text-center">
                                            Logout</button>
                                    </li>

                                </ul>
                            </li>}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;