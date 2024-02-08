import React, { useState, useContext} from "react";
import { Navbar } from "../component/navbar";
import "../../styles/private.css";

const Private = () => {
    
    return (
        <div>
            <Navbar/>
            <div className="privatePage">
                <h3 className="privateText">This is a private page for registered users <strong>only.</strong></h3>
            </div>
        </div>  
    );
}
export default Private;