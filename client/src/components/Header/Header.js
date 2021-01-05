import React, { useState } from 'react';
import AuthNav from '../UI/Nav/AuthNav';
import Card from '../UI/Card/Card';
import classes from './Header.css';
import Logo from '../UI/Logo/Logo';

const Header = () => {
    const isLoggedIn = true;
    return (
        <header className='main-header'>
            <Logo
                isLoggedIn={ isLoggedIn } />
            <AuthNav
                isLoggedIn={ isLoggedIn }
              />
        </header>
    )
};

export default Header;