import React, { useState, useContext} from "react";
import { Navbar } from "../component/navbar";
import "../../styles/private.css";
import { useNavigate } from "react-router-dom";

const Private = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        setStore({ user: [], isAuthenticated: false });
        navigate("/");
    };
    
    return (
        <div>
            <Navbar isLoggedIn={true} handleLogout={handleLogout} />
                <div className="privatePage">
                    <h3 className="privateText">This is a private page for registered users <strong>only.</strong></h3>
                </div>
        </div>
    );
};
export default Private;