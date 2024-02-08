import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate }from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const Login = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
   
    useEffect(() => {
      setEmail('');
      setPassword('');
    }, []);

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
          const result = await actions.login(email, password);
          if (result) {
            navigate("/private"); 
            setEmail('');
            setPassword('');
          }
      } catch (error) {
          console.error("Error en el inicio de sesión:", error);
      }
    };

  return (
    <div className="container login">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btnLogin">
          Login
        </button>
      </form>
      <div className="mt-3">
        <p>
          Don't have an account? <Link to="/signup">Create account</Link>
        </p>
      </div>
      <div className="mt-3">
        <p>
          <Link to="/">← Back</Link>
        </p>
      </div>
    </div>
  );
};
