import React from "react";
import Header from "../components/Header";
import "../styles/Login.scss";
import Layout from "./Layout";

const Login = () => {
  return (
    <>
    <Header />
      <div className="login">
        <div className="form-container">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
          <form action="/" className="form">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="text"
              id="email"
              placeholder="email"
              className="input input-email"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />
            <input
              type="submit"
              defaultValue="Log in"
              className="primary-button login-button"
            />
            <a href="/">Forgot my password</a>
          </form>
          <button className="secondary-button signup-button">Sign up</button>
        </div>
      </div>
      </>
  );
};

export default Login;
