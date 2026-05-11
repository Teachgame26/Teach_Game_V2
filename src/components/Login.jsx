import { useState } from "react";
import "../auth/auth.css";
import logo from "../assets/logo.jpg";


function Login({ onSwitch, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // 🔹 Nuevo estado para mensajes
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success | error


  const handleSubmit = (e) => {
    e.preventDefault();


    // Reset mensaje
    setMessage("");


    if (!email || !password) {
      setMessage("Completa todos los campos");
      setMessageType("error");
      return;
    }


    if (!email.includes("@")) {
      setMessage("Correo incorrecto");
      setMessageType("error");
      return;
    }


    if (password.length < 6) {
      setMessage("La contraseña debe tener mínimo 6 caracteres");
      setMessageType("error");
      return;
    }


    if (email === "maria@ejemplo.com" && password === "123456") {
      setMessage("Bienvenido");
      setMessageType("success");


      // Simula ingreso a la app
      setTimeout(() => {
        onLogin();
      }, 1000);
    } else {
      setMessage("Datos incorrectos");
      setMessageType("error");
    }


    console.log("Email:", email);
    console.log("Password:", password);
  };


  return (
    <div className="auth-container">
      <div className="auth-card">


        {/* LOGO */}
        <div className="auth-logo">
          <img src={logo} alt="Logo" />
        </div>


        <h2 className="auth-title">
          Iniciar <span>Sesión</span>
        </h2>


        {/* 🔹 Mensaje dentro del formulario */}
        {message && (
          <div className={`auth-message ${messageType}`}>
            {message}
          </div>
        )}


        <form onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <input
            className="auth-input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <button className="auth-button" type="submit">
            Ingresar
          </button>
        </form>


        <div className="auth-footer">
          ¿No tienes cuenta?{" "}
          <span className="auth-link" onClick={onSwitch}>
            Regístrate
          </span>
        </div>
      </div>
    </div>
  );
}


export default Login;