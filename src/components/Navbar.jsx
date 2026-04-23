import { useState } from "react";
import "./Navbar.css";

function Navbar({ vistaActiva, onCambiarVista, onLogout }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const links = [
    { id: "inicio",  label: "Inicio",   icono: "🏠" },
    { id: "juegos",  label: "Juegos",   icono: "🎮" },
    { id: "ranking", label: "Ranking",  icono: "🏆" },
    { id: "perfil",  label: "Mi Perfil", icono: "👤" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__inner container">

        {/* Logo */}
        <div className="navbar__logo">
          <span>Teach<span className="navbar__logo-accent">Game</span></span>
        </div>

        {/* Links */}
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.id}>
              <button
                className={`navbar__link ${vistaActiva === link.id ? "navbar__link--active" : ""}`}
                onClick={() => onCambiarVista(link.id)}
              >
                <span>{link.icono}</span>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Usuario + Logout */}
        <div className="navbar__user">
          <div className="navbar__avatar">VG</div>
          <span className="navbar__username">Jugador_01</span>

          {/* 🔥 BOTÓN CERRAR SESIÓN */}
          <button className="navbar__logout" onClick={onLogout}>
            Salir
          </button>
        </div>

        {/* Botón menú mobile */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

      </div>

      {/* Menú mobile */}
      {menuAbierto && (
        <div className="navbar__mobile-menu">
          {links.map((link) => (
            <button
              key={link.id}
              className="navbar__mobile-link"
              onClick={() => {
                onCambiarVista(link.id);
                setMenuAbierto(false);
              }}
            >
              {link.icono} {link.label}
            </button>
          ))}

          {/* 🔥 Logout en mobile */}
          <button
            className="navbar__mobile-link"
            onClick={onLogout}
          >
            🚪 Cerrar sesión
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;