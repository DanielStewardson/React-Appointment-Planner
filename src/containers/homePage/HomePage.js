import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
    return ( 
        <div className='home-page'>
            <div className='home-page-message'>
                <h1>Welcome to Dan's Digi Diary!</h1>{<br/ >}{<br/ >}
                <p>This is a practice project on my path to learning front end web development.</p>{<br/ >}
                <p>Don't expect anything too fancy yet!</p>
            </div>
            <div className='home-page-buttons-container'>
                <Link to='/contacts'>
                    <button className='home-page-button'>Contacts</button>
                </Link>
                <Link to='/appointments'>
                    <button className='home-page-button'>Appointments</button>
                </Link>
            </div>
        </div>
     );
};
 
export default HomePage;