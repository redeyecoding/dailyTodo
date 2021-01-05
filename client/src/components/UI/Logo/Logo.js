import React from 'react'
import './Logo.css';
import { NavLink } from 'react-router-dom';
import  logo from "../../../assets/images/DoSTUFF.png";


const Logo = props => {
    const isLoggedIn = props.isLoggedIn;
    return (
        <a className={ isLoggedIn ? "logo-container__logged-in" : "logo-container__logged-out" }>
            <img src={ logo }/>
        </a>
        
    )
};

export default Logo;