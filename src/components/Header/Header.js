import React from 'react';
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
const Header = () => {
    const { user, logout } = useAuth();
    const location = useLocation();
    const home = location.pathname === '/' || location.pathname === '/home';
    console.log(home);

    return (

        <nav className="navbar navbar-expand-lg bg-transparent navbar-light shadow py-4"
            style={{ backgroundColor: home && 'white', position: home ? 'absolute' : 'sticky', width: home && '100%', zIndex: home && '9999', color: home ? 'white' : 'black' }}
        >
            <div className="container-fluid">
                <Link className="navbar-brand" style={{ color: home && 'white' }} to="/home">
                    <img src={logo} height="80" width="80" alt="" />
                    Watchy World</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: home && 'white' }} to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link" style={{ color: home && 'white' }} to="/explore">Explore</Link>
                        </li>

                        {user?.email &&
                            <li>
                                <Link className="nav-link" style={{ color: home && 'white' }} to="/dashboard">Dashboard</Link>
                            </li>
                        }

                        {!user?.email &&
                            <li>
                                <Link className="nav-link" style={{ color: home && 'white' }} to="/login">Login</Link>
                            </li>
                        }
                        {user?.email &&
                            <li>
                                <span className="nav-link" style={{ color: home && 'white' }}>{user.displayName}
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