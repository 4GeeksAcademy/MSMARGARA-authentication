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
      console.error('Error al crear usuario:', error);
      if (error.message === "El correo electrónico ya está registrado.") {
          setErrorMessage("La cuenta ya existe. Por favor, intenta con otro correo electrónico.");
      } else {
          setErrorMessage("Error al crear la cuenta. Por favor, inténtalo de nuevo más tarde.");
      }
      setEmail('');
      setPassword('');
  }
  };

  const handleInputChange = () => {
    setErrorMessage('');
  };

  return (
    <div className="jumbotron">
      <div className="row">
        <div className="col-4">
          <h1 className="titleSignup">Create an account</h1>
        </div>
        <div className="col-8">
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
            <button type="submit" className="btnSignup">
              Create account
            </button>
          </form>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-4">
          <Link to="/login" className="linkSignup my-4">
            <p>← Back</p>
          </Link>
        </div>
        <div className="col-8">
          <hr className="my-4" />
      </div>
</div>

    </div>
  );
};

