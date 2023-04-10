import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form__container">
      <h2>Register</h2>
      <form className="auth-form__register" onSubmit={handleSubmit}>
        <label className="auth-form__label" htmlFor="name">
          Full name
        </label>
        <input
          className="auth-form__input"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Full name"
        />
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
        <label className="auth-form__label" htmlFor="pasword">
          Password
        </label>
        <input
          className="auth-form__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button type="submit" className="auth-form__btn">
          Log In
        </button>
      </form>
      <button
        className="auth-form__link-btn"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account? Login here
      </button>
    </div>
  );
};

export default Register;
