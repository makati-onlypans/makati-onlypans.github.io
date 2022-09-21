import React from 'react';
import Navbar from './NavBar';
import { useState, useEffect } from 'react';
import { editUser, getAllUsers } from '../service/api';
import { getAllDept } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';
const userCapturedVal = {
    name: "",
    description: "",
    price: "",
    photo: "",
    department: ""

}

const Edituser = () => {
    //edit user
    const [user, setUser] = useState(userCapturedVal);
    const { name, description, price, photo, department } = user;
    const { id } = useParams();
    const loadUserData = async () => {
        const response = await getAllUsers(id);
        setUser(response.data);
    }
    useEffect(() => {
        loadUserData();
    }, []);

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    let navigate = useNavigate();

    const editUserDetails = async () => {
        await editUser(id, user);
        navigate('/all');
    }
    //get department
    const [deptName, setDept] = useState([]);
    useEffect(() => {
        getDepartments();
    }, [])

    const getDepartments = async () => {
        const response = await getAllDept();
        console.log(response);
        setDept(response.data);
    }

    return (
        <div className="container mt-3">
            <Navbar />
            <h1>Edit Menu</h1>
            <form>
                <div className='d-flex flex-md-row flex-sm-column gap-3'>
                    <div>
                        <div>
                            <img className="img-fluid img-rounded" style={{ with: 350, height: 350 }} src={photo} alt="logo" />
                            {/* <img style={{ with: 200, height: 200 }} src={photo} alt="logo" /> */}
                        </div>
                    </div>
                    <div>
                        <div className="mb-2">
                            <input type="text" placeholder="Title"
                                onChange={(e) => onValueChange(e)} name="name" value={name}
                            />
                        </div>
                        <div className="mb-2">
                            <input type="text" placeholder="Photo Url"
                                onChange={(e) => onValueChange(e)} name="photo" value={photo}
                            />
                        </div>
                        <div className="mb-2">
                            <input type="text" placeholder="Price"
                                onChange={(e) => onValueChange(e)} name="price" value={price}
                            />
                        </div>
                        <div className="mb-2">
                            <input type="textarea" placeholder="Description"
                                onChange={(e) => onValueChange(e)} name="description" value={description}
                            />
                        </div>
                        <div className="mb-2">
                            <select onChange={(e) => onValueChange(e)} name="department" value={department}>
                                <option disabled>Select Group</option>
                                {
                                    deptName.map((data) => (
                                        <option value={data.departmentName}>{data.departmentName}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="mb-2">
                            <input type="sumbit" className="btn btn-primary" value="Update" onClick={() => editUserDetails()} />
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
}

export default Edituser;
