import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
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
                            <Link className="nav-link" to="/explore">Explore</Link>
                        </li>

                        {user?.email &&
                            <li>
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                        }

                        {!user?.email &&
                            <li>
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        }
                        {user?.email &&
                            <li>
                                <span className="nav-link">{user.displayName}
                                    <button type="button" className="ms-2 btn btn-sm btn-outline-danger" onClick={logout}>Logout</button>
                                </span>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;