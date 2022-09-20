import React, { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';
const Allusers = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = async () => {
        const response = await getAllUsers();
        console.log(response);
        setUser(response.data);
    }
    const deleteData = async (id) => {
        await deleteUser(id);
        getUsers();
    }

    return (
        <div className='container'>
            <Navbar />
            <h1>All Records</h1>
            <div className="container">
                <Link className='btn btn-primary mb-2' to={'/add'}><i className="fa fa-plus-circle"></i> Add Menu</Link>
                {/* <form>
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Search Name" />
                                </div>
                                <div className="col">
                                    <input type="submit" className="btn btn-outline-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form> */}
            </div>
            <div className="container">
                <div className="row">
                    {
                        user.map((data) => (
                            <div className="col-md-3">
                                <div className="card my-2 list-group-item-success shadow-lg">
                                    <div className="card-body">
                                        <div className="align-items-center">
                                            <div className="col-sm-12">
                                                <img className='img-fluid mb-2' src={data.photo} alt="logo" />
                                            </div>
                                            <div className="col-sm-12">
                                                <ul className="list-group text-center">
                                                    <li className="list-group-item">Title: <br /> <span className="fw-bold">{data.name}</span></li>
                                                    <li className="list-group-item">Description: <span className="fw-bold">{data.description}</span></li>
                                                    <li className="list-group-item">Price: <span className="fw-bold">{data.price}</span></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-12 d-flex gap-3 justify-content-center align-items-center">
                                                <Link className="btn btn-warning my-1" to={`/view/${data.id}`}>
                                                    <i className="fa fa-eye"></i>
                                                </Link>
                                                <Link className="btn btn-primary my-1" to={`/edit/${data.id}`}>
                                                    <i className="fa fa-pen"></i>
                                                </Link>
                                                <button className="btn btn-danger my-1" onClick={() => deleteData(data.id)}>
                                                    <i className="fa fa-trash"></i>
                                                </button>
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
    );
}
export default Allusers;
