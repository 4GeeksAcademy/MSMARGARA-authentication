import React, { useState, useContext} from "react";
import { Link, useNavigate }from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const Login = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
   
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
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btnLogin">
          Iniciar sesión
        </button>
      </form>
      <div className="mt-3">
        <p>
          ¿No tienes una cuenta? <Link to="/signup">Crear cuenta</Link>
        </p>
      </div>
      <div className="mt-3">
        <p>
          <Link to="/">Volver</Link>
        </p>
      </div>
    </div>
  );
};
