import React from 'react';
import './AuthNav.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../UI/Logo/Logo';

const AuthNav = props => {
    // Right code for having two separate headers.
    return (
        <>           
            <nav className="head-main-menu header-area">
                <ul className="head-main-menu_items">
                    <li className="head-main-menu_label">
                        <NavLink
                            className="nav-link"
                            to="/">Home</ NavLink>
                    </li>

                    <li className="head-main-menu_label">
                        <NavLink 
                            className="nav-link"
                            to="/profile">Profile</ NavLink>
                    </li>

                    <li className="head-main-menu_label">
                        <NavLink 
                            className="nav-link user-lists my-lists"
                            to="/my-lists">My Lists</ NavLink>
                    </li>
                </ul>
            </nav>
        </>

    )
};

export default AuthNav;