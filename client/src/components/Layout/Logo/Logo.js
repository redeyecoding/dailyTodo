import React from 'react'
import './Logo.css';
import { NavLink } from 'react-router-dom';


const Logo = () => {
    return (
        <div className="logo-container">
            <NavLink to='/' className='main-logo'>LOGO</NavLink>
        </div>
    )
};

export default Logo;