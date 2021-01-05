import React from 'react'
import './Logo.css';
import { NavLink } from 'react-router-dom';
import  logo from "../../../assets/images/DoSTUFF.png";


const Logo = () => {
    return (
        <a className="logo-container ">
            <img src={ logo }/>
        </a>
        
    )
};

export default Logo;