import React from "react";
// import {Link} from 'react-router-dom';
import './UserNavBar.css';

const UserNavBar = ()=>{


    return (
      <div className="container m-0 p-0">
<nav className="custom-className-main-nav navbar sticky-top navbar-expand-lg p-3 shadow bg-white borderless">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="custom-className-logo-top collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="custom-className-logo-top nav-item">
          <a id="homeicon" className="custom-className-logo-top nav-link active" aria-current="page" ><img className="custom-className-logo-top" src="/img/onlypansprofilepicture.jpeg" alt="" /></a>
          <hr className="custom-className-logo-top-hr"></hr>
        </li>
      </ul>
      <ul className="custom-className-navbar-gap navbar-nav mb-2 mb-lg-0">
        <li className="nav-item text-center">
          <a id="custom-className-hover-a" className="fs-5 nav-link" aria-current="page" >Menu</a>
        </li>
        <li className="nav-item text-center">
          <a id="custom-className-hover-a" className="fs-5 nav-link" aria-current="page" >Events</a>
        </li>
        <li className="nav-item text-center">
          <a id="custom-className-hover-a" className="fs-5 nav-link" >About Us</a>
        </li>
      
      <li className="custom-className-dropdown nav-item dropdown">
        <button className=" dropdown-toggle" type="button" data-bs-toggle="dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="red" className="bi bi-person-square" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
              </svg>
        </button>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
          <li>
          <button className='btn' >
               Logout
            </button>
            </li>
          <li>
          <button className='btn btn-light ' to='/userregister'>
                 Register
              </button>
              </li>
        </ul>
      </li>
    </ul>
    </div>
</nav>
</div>
    )
}
export default UserNavBar