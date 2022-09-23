import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="container-fluid m-0 p-0">
        <nav className="navbar navbar-light bg-light container-fluid">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand h1">
                    <i className="fa fa-home"></i>Home
                </Link>
                <Link to="/admin" className='navbar-toggler text-decoration-none'>
                    <i className="fa fa-user"></i>View All
                </Link>
                <Link to="/add" className='navbar-toggler text-decoration-none'>
                    <i className="fa fa-plus"></i>Add Menu Item
                </Link>
            </div>
        </nav>
    </div>
    );
}

export default Navbar;
