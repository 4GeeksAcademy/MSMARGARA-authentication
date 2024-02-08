import React from "react";
import { Link } from "react-router-dom";
import "../../styles/component.css";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container-fluid navebar">
				<Link to="/">
					<span className="linkHome">HOME</span>
				</Link>
				<Link to="/private">
					<span className="linkHome">Private</span>
				</Link>
				<div>
					<Link to="/login">
						<button className="btn">Login</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
