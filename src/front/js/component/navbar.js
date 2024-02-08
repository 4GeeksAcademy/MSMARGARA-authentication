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
        <nav className="navbar">
            <div className="container-fluid navebar">
                <Link to={isLoggedIn ? "/" : "/login"}>
                    <button className="btn" onClick={handleClick}>
                        {isLoggedIn ? "Log Out" : "Login"}
                    </button>
                </Link>
            </div>
        </nav>
    );
};
