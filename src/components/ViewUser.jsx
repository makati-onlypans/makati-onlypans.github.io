import React from 'react';
import { getAllUsers } from '../service/api';
import {useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Navbar from './NavBar';
const userInitialState ={
    name: "",
    email: "",
    title: "",
    mobile: "",
    photo: "",
    companyName: "",
    department: ""

}
const Viewuser = () => {
    const [user, setUser] = useState(userInitialState);
    const {name,email,title,mobile,photo,companyName, department} = user;
    const {id} = useParams();
    const loadUserData = async () =>{
        const response = await getAllUsers(id);
        setUser(response.data);
    }
    useEffect (()=>{
        loadUserData();
    }, []);

    return (
        <div className="container mt-3">
        <Navbar/>
        <h1>View</h1>
        <div className="container">
        <div className="row">
                <div className="col-md-6">
                <div className="card my-2 list-group-item-success shadow-lg">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-sm-4">
                                <img style={{ width: 100, height:100}} src={photo} alt="logo"/>
                            </div>
                            <div className="col-sm-7">
                                <ul className="list-group">
                                    <li className="list-group-item">Name: <span className="fw-bold">{name}</span></li>
                                    <li className="list-group-item">Email: <span className="fw-bold">{email}</span></li>
                                    <li className="list-group-item">Mobile: <span className="fw-bold">{mobile}</span></li>
                                    <li className="list-group-item">Position: <span className="fw-bold">{title}</span></li>
                                    <li className="list-group-item">Company: <span className="fw-bold">{companyName}</span></li>
                                    <li className="list-group-item">Department: <span className="fw-bold">{department}</span></li>   
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
    </div>
    </div>
    </div>
    );
}

export default Viewuser;
