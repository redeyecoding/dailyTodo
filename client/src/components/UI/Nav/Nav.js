import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';


const Nav = props => {
    return (
        <nav className="head-main-menu">
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
                        className="nav-link user-lists"
                        to="/my-lists">My Lists</ NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;