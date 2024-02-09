import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const Home = () => {
    return (
        <div>
            <div className="home container-fluid">
                <Navbar isLoggedIn={false}/>
                <div className="row homeContainer">
                    <div className="col-md-7 text">
                        <div className="row">
                            <div className="col-12 title"><p>Marina Margara</p></div>
                            <div className="col-12 subheading"><p>Authentication system with Python Flask and React.js</p></div>
                            <div className="col-12 project"><p>Educational Practice Projec</p></div>
                            <div className="col-12 academy"><p>4Geeks Academy</p></div>
                        </div>
                    </div>
                <div className="col-md-5 imgHome"></div>
            </div>
            </div>
        </div>
    );
};