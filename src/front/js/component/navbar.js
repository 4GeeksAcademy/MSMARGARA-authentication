// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/component.css";

export const Navbar = ({ isLoggedIn, handleLogout }) => {
    const handleClick = () => {
        if (isLoggedIn) {
            handleLogout();
        }
    };

    return (
        <nav className="navbar d-flex justify-content-end"> 
            <Link to={isLoggedIn ? "/" : "/login"}>
                <button className="btn" onClick={handleClick}>
                    {isLoggedIn ? "Log Out" : "Login"}
                </button>
            </Link>
        </nav>
    );
    
};
