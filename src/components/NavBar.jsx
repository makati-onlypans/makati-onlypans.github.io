import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
    <nav className="navbar navbar-light bg-light container">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand h1">
                <i className="fa fa-home"></i>Home
            </Link>
            <Link to="/all" className='navbar-toggler text-decoration-none'>
                <i className="fa fa-user"></i>View All
            </Link>
            <Link to="/add" className='navbar-toggler text-decoration-none'>
                <i className="fa fa-plus"></i>Add User
            </Link>
        </div>
    </nav>
    );
}

export default Navbar;
