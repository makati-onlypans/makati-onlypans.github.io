import React from 'react';
import Home from './components/Home';
import Adduser from './components/AddUser';
import Edituser from './components/EditUser';
import Allusers from './components/AllUsers';
import Notfound from './components/NotFound';
import Viewuser from './components/ViewUser';
import { Route, Routes} from 'react-router-dom';
const Componentroute = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/add' element={<Adduser/>}/>
            <Route path='/all' element={<Allusers/>}/>
            <Route path='/view/:id' element={<Viewuser/>}/>
            <Route path='/edit/:id' element={<Edituser/>}/>
            <Route path='*' element={<Notfound/>}/>                  
        </Routes>    
    );
}

export default Componentroute;
