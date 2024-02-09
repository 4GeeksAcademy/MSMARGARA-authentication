import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Signup = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await actions.createUser(email, password); 
      console.log('Usuario creado con éxito:', data);
      navigate("/login"); 
    } catch (error) {
      console.error('Error creating user:', error.message);
      setErrorMessage(error.message); 
      setEmail('');
      setPassword('');
    }
  };
  
  const handleInputChange = () => {
    setErrorMessage('');
  };

  return(
    <div className="container signup">
      <div className="row">
        <div className="col-md-5">
          <h1 className="titleSignup">Create an account</h1>
        </div>
        <div className="col-md-7">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSignup}> 
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); handleInputChange(); }}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); handleInputChange(); }}
                required
              />
            </div>
            <button type="submit" className="btn btnSignup">
              Create account
            </button>
          </form>
        </div>
      </div>
      <div className="row aling-items-center">
            <div className="col-md-5">
              <Link to="/login" className="linkSignup">
              ← Go Back
              </Link>
            </div>
            <div className="col-md-7">
              <hr className="mt-4" />
            </div>
      </div>
    </div>
  );
};
