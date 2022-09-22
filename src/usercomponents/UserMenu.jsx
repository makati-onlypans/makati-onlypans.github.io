import React, { useEffect, useState } from 'react';
import UserFooter from "./UserFooter";
import UserNavBar from "./UserNavBar";
import Image from 'react-bootstrap/Image';
import { getAllUsers } from "../service/api";
import './style.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
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


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <UserNavBar />
            <div className='container'>
                <h1 className="AdminHeading text-center mt-5 mb-4">Our Menu</h1>
                <div className="container mb-5" style={{ borderBottom: '12px solid rgba(0, 0, 0, 0.8)', borderRadius: 25, width: 250 }}></div>
                <div className="container mb-5">
                    <div className="row">
                        {
                            user.map((data) => (
                                <div className="col-md-4 container1">
                                    <div className="card my-2 shadow-lg border-danger">
                                        <div className="card-body">
                                            <div className="align-items-center">
                                                <div className="col-sm-12">
                                                    <Image className='img-fluid mb-2' rounded src={data.photo} alt="logo" />
                                                </div>
                                                <div className="col-sm-12">
                                                    <ul className="list-group text-center">
                                                        <h5 className="card-title mb-1 fs-4">{data.name}</h5>
                                                        {/* <p class="col card-text">{data.description}</p> */}
                                                        <p class="col card-text fs-5">P{data.price}</p>
                                                        <Link variant="danger" to={`/usermenu/view/${data.id}`}>
                                                            <Button variant="danger" onClick={handleClose}>
                                                                See Details
                                                            </Button>
                                                        </Link>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-12 d-flex gap-3 justify-content-center align-items-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >

            <UserFooter />
        </>
    )
}