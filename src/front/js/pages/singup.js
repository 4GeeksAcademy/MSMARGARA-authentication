import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singup = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="jumbotron">
      <h1 className="display-4">Create an Account</h1>
      <form >
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
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
      </form>
      <hr className="my-4" />

      <Link to="/login">
        <span className="btn btn-secondary" role="button">
          Volver
        </span>
      </Link>
    </div>
  );
};
