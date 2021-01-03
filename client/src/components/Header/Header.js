import React from 'react';
import Nav from '../UI/Nav/Nav';
import Card from '../UI/Card/Card';
import classes from './Header.css';


const Header = () => {
    return (
        <header className='main-header'>
            <Nav />            
        </header>
    )
};

export default Header;