import axios from 'axios';

const urlUser = "http://127.0.0.1:8000/user";
const urlDept= " http://127.0.0.1:8000/department";

export const getAllDept = async (id) => {
    id = id || '';
    return await axios.get(`${urlDept}/${id}`);
} 
export const getAllUsers = async (id) => {
    id = id || '';
    return await axios.get(`${urlUser}/${id}`);
} 

export const addUser = async (user) =>{
    return await axios.post(urlUser, user);
}
export const editUser = async (id, user)=>{
    return await axios.put(`${urlUser}/${id}`, user);
}
export const deleteUser = async (id) =>{
    return await axios.delete(`${urlUser}/${id}`);
} 
