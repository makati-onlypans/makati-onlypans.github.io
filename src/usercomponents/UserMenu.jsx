import React, { useEffect, useState } from 'react';
import UserFooter from "./UserFooter";
import UserNavBar from "./UserNavBar";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import { getAllUsers } from "../service/api";

export default function UserMenu() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = async () => {
        const response = await getAllUsers();
        console.log(response);
        setUser(response.data);
    }



    return (
        <>
            <UserNavBar/>
            <div className='container'>
            <h1 className="AdminHeading text-center my-5">Menu List</h1>
            
            <div className="container mb-5">
                <div className="row">
                    {
                        user.map((data) => (
                            <div className="col-md-4">
                                <div className="card my-2 shadow-lg border-danger">
                                    <div className="card-body">
                                        <div className="align-items-center">
                                            <div className="col-sm-12">
                                                <Image className='img-fluid mb-2' rounded src={data.photo} alt="logo" />
                                            </div>
                                            <div className="col-sm-12">
                                                <ul className="list-group text-center">
                                                    <h5 className="card-title mb-1">{data.name}</h5>
                                                    {/* <p class="col card-text">{data.description}</p> */}
                                                    <p class="col card-text">P{data.price}</p>
                                                </ul>
                                            </div>
                                            <div className="col-sm-12 d-flex gap-3 justify-content-center align-items-center">
                                                <Link className="btn btn-warning my-1" to={`/view/${data.id}`}>
                                                    <i className="fa fa-eye"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    <UserFooter/>
        </>
    )
}