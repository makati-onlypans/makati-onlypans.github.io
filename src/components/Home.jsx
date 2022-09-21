import React from 'react';
import UserNavbar from '../usercomponents/UserNavBar'
import UserFooter from '../usercomponents/UserFooter';
const Home = () => {
    return (
        <div className='container'>
            <UserNavbar/>
            <UserFooter/>
        </div>
    );
}

export default Home;
