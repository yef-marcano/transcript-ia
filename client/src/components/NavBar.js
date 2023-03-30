import React from 'react';
import {Link} from 'react-router-dom';
import picture from '../style/media/logo.png';
const NavBar = () => {
    return (
        <div className='topnav'>
            <Link to='/' className='logo'>
                <img className='logo' src={picture}/>
            </Link>
            <nav id ="navbar_top">
                <ul>
                    <li><Link to='/'>INICIO</Link></li>
                    <li><Link to='/'>DASHBOARD</Link></li>
                    <li><Link to='/tran'>TRANSCRIBE</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
