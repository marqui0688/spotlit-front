import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="register-form__container">
      <h2 className="register-form__header">Register</h2>
      <form className="register-form__register" onSubmit={handleSubmit}>
        <label className="register-form__label" htmlFor="name">
          Full name
        </label>
        <input
          className="register-form__input"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Full name"
        />
        <label className="register-form__label" htmlFor="email">
          Email
        </label>
        <input
          className="register-form__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
        />
        <label className="register-form__label" htmlFor="pasword">
          Password
        </label>
        <input
          className="register-form__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button type="submit" className="register-form__btn">
          Log In
        </button>
      </form>
      <Link to="/login">Already have an account? Login here</Link>
    </div>
  );
};

export default Register;
