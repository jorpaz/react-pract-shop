import React from "react";
import Header from "../components/Header";

//? Styles
import "@styles/Login.scss";
import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
  return (
    <>
      <Header />
      <div className="Login">
        <div className="Login-container">
          <img src={logo} alt="logo" className="logo" />
          <form action="/" className="form">
            <label htmlFor="email" className="label">
              Correo Electronico
            </label>
            <input
              type="text"
              id="email"
              placeholder="email"
              className="input input-email"
              />
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />
            <input
              type="submit"
              value="INGRESAR"
              className="primary-button login-button"
            />
            <a href="/recovery-password">¿Olvidaste tu Contraseña?</a>
          </form>
          <button className="secondary-button signup-button">CREAR CUENTA</button>
        </div>
      </div>
    </>
  );
};

export default Login;
