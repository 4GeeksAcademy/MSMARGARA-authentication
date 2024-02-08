import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="home">
                <div className="row homeContainer">
                    <div className="col-7 text">
                        <div className="row title"><p>Marina Margara</p></div>
                        <div className="row subheading"><p>Authentication system with Python Flask and React.js</p></div>
                        <div className="row project"><p>Educational Practice Projec</p></div>
                        <div className="row academy"><p>4Geeks Academy</p></div>
                    </div>
                    <div className="col-5 imgHome"></div>
                </div>
            </div>
        </div>
    );
};