import { useState } from "react";
import "../auth/auth.css";
import logo from "../assets/logo.jpg";

function Register({ onSwitch, onLogin }) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.nombre && form.email && form.password) {
      onLogin(); // entra directo después de registrarse
    } else {
      alert("Completa los campos");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        {/* 🔥 LOGO */}
        <div className="auth-logo">
          <img src={logo} alt="Logo" />
        </div>

        <h2 className="auth-title">
          Crear <span>Cuenta</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
          />

          <input
            className="auth-input"
            type="email"
            name="email"
            placeholder="Correo"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
          />

          <button className="auth-button" type="submit">
            Registrarse
          </button>
        </form>

        <div className="auth-footer">
          ¿Ya tienes cuenta?{" "}
          <span className="auth-link" onClick={onSwitch}>
            Inicia sesión
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;