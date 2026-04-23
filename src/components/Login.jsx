import { useState } from "react";
import "../auth/auth.css";
import logo from "../assets/logo.jpg"; // tu logo

function Login({ onSwitch, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Validar campos vacíos
    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    // 🔹 Validar formato de correo
    if (!email.includes("@")) {
      alert("Correo incorrecto");
      return;
    }

    // 🔹 Validar contraseña
    if (password.length < 6) {
      alert("La contraseña debe tener mínimo 6 caracteres");
      return;
    }

    // 🔹 Simulación de datos correctos
    if (email === "maria@ejemplo.com" && password === "123456") {
      alert("Bienvenido");
      onLogin(); // entra a la app
    } else {
      alert("Datos incorrectos");
    }

    // 👀 Mostrar en consola
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