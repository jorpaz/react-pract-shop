import React, {useRef } from "react";
import Header from "../components/Header";

//? Styles
import "@styles/Login.scss";
import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
  
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password') 
    }
    console.log(data);
  }

  return (
    <>
      <Header />
      <div className="Login">
        <div className="Login-container">
          <img src={logo} alt="logo" className="logo" />
          <form action="/" className="form" ref={form}>
            <label htmlFor="email" className="label">
              Correo Electronico
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-email"
              />
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="primary-button login-button">
              INGRESAR
            </button>
            <a href="/recovery-password">¿Olvidaste tu Contraseña?</a>
          </form>
            <button
              className="secondary-button signup-button"
              onClick={handleSubmit}>
              CREAR CUENTA
            </button>
        </div>
      </div>
    </>
  );
};

export default Login;
