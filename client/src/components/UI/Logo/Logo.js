import React from 'react'
import './Logo.css';
import { NavLink } from 'react-router-dom';
import "../../../assets/images/Todo";


const Logo = () => {
    return (
        <img src={ logo }className="logo-container"></img>
    )
};

export default Logo;