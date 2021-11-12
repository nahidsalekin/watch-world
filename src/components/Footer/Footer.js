import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer-container">
            <h4 className="fw-bold border-bottom border-secondary pb-1">A Smartwatch makes you smarter than others</h4>
            <div className="row mx-0">
                <div className="col-md-4">

                    <h5>About</h5>

                    <p>Need a watch? We have all kind of smartwatch is available now in our stock with the best price in Bangladesh</p>
                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">

                    <Link className="nav-link" to="/home">Home</Link>

                    <Link className="nav-link" to="/services">Services</Link>

                    <Link className="nav-link" to="/register">Register</Link>

                    <Link className="nav-link" to="/login">Login</Link>

                </div>
                <div className="col-md-4">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.3870430363!2d90.27923614246178!3d23.78057325463635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1635611008869!5m2!1sen!2sbd" style={{ width: '100%' }} height="200" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Footer;