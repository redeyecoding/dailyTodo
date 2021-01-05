import React from 'react';
import AuthNav from '../UI/Nav/AuthNav';
import Card from '../UI/Card/Card';
import classes from './Header.css';
import Logo from '../UI/Logo/Logo';

const Header = () => {
    return (
        <header className='main-header'>
            <Logo />
            <AuthNav />            
        </header>
    )
};

export default Header;