import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="login-form__container">
      <div className="title-wrapper">
        <h1 className="title-wrapper__title">Spotlit</h1>
        {/* <img className="login-form__app-logo" src={logo} alt="spotlit-logo" /> */}
      </div>

      <form className="login-form__login" onSubmit={handleSubmit}>
        <h2 className="login-form__header">Login</h2>
        <label className="login-form__label" htmlFor="email">
          Email
        </label>
        <input
          className="login-form__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
        />
        <label className="login-form__label" htmlFor="Password">
          Password
        </label>
        <input
          className="login-form__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <Link to="/">
          <button className="login-form__btn" type="submit">
            Log In
          </button>
        </Link>
      </form>
      <Link to="/register">Don't have an account? Register here.</Link>
    </div>
  );
};

export default Login;
