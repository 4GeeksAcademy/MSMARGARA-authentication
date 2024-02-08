import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Signup = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await actions.createUser(email, password); 
      console.log('Usuario creado con éxito:', data);
      navigate("/login"); 
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  };

  return (
    <div className="jumbotron">
      <div className="row">
        <div className="col-4">
          <h1 className="titleSignup">Create an account</h1>
          <Link to="/login" className="linkSignup">
          <p>
            <Link to="/login">← Back</Link>
          </p>
        </Link>
        </div>
        <div className="col-8">
          <form onSubmit={handleSignup}> 
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btnSignup">
              Create account
            </button>
          </form>
          <hr className="my-4" />
        </div>
      </div>
    </div>
  );
};
