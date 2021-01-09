import React, { useState } from 'react';
import AuthNav from '../UI/Nav/AuthNav';
import Logo from '../UI/Logo/Logo';
import  { connect } from 'react-redux';
import './Header.css';

const Header = props => {
    const isLoggedIn = true;
    return (
        <header className={ props.isError ? 'active-modal' : 'main-header' }>
            <Logo
                isLoggedIn={ isLoggedIn } />
            <AuthNav
                isLoggedIn={ isLoggedIn }
              />
        </header>
    )
};

const mapStateToProps = state => {
    return {
        isError: state.errorActive
    }
};

export default connect(mapStateToProps)(Header);