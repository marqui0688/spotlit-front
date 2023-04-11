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
    <div className="auth-form__container">
      <div classname="title-wrapper">
        <h1 classname="title-wrapper__title">Spotlit</h1>
        {/* <img className="auth-form__app-logo" src={logo} alt="spotlit-logo" /> */}
      </div>

      <form className="auth-form__login" onSubmit={handleSubmit}>
        <h2 classname="form-header">Login</h2>
        <label className="auth-form__label" htmlFor="email">
          Email
        </label>
        <input
          className="auth-form__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
        />
        <label className="auth-form__label" htmlFor="Password">
          Password
        </label>
        <input
          className="auth-form__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <Link to="/">
          <button className="auth-form__btn" type="submit">
            Log In
          </button>
        </Link>
      </form>
      <button
        className="auth-form__link-btn"
        type="submit"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
