import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    	<div className="container">
      		<form className="mt-5">
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						className="form-control"
						id="email"
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
						placeholder="Ingrese su contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">Iniciar sesión</button>
      		</form>
      		<div className="mt-3">
        		<p>¿No tienes una cuenta?{" "}<Link to="/singup">Crear cuenta</Link></p>
      		</div>
			  <div className="mt-3">
        		<p><Link to="/">Volver</Link></p>
      		</div>
    	</div>
  );
};
