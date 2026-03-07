import { useState } from "react";
import { USUARIOS, JUEGOS } from "../data/mockData";
import "./Perfil.css";

function Perfil() {
  // Estado del usuario logueado (usamos el primero de la lista)
  const [usuario, setUsuario] = useState(USUARIOS[0]);
  const [editando, setEditando] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(USUARIOS[0].nombre);

  // Historial de juegos del usuario
  const [historial] = useState(JUEGOS.slice(0, 4));

  // Guarda el nuevo nombre
  const guardarNombre = () => {
    if (nuevoNombre.trim()) {
      setUsuario((prev) => ({ ...prev, nombre: nuevoNombre }));
    }
    setEditando(false);
  };

  return (
    <div className="perfil container">

      {/* Tarjeta principal del usuario */}
      <div className="perfil__card">
        <div
          className="perfil__avatar"
          style={{ background: `linear-gradient(135deg, ${usuario.color}, #080b14)` }}
        >
          {usuario.avatar}
        </div>

        <div className="perfil__info">
          {editando ? (
            <div className="perfil__edit-row">
              <input
                className="perfil__input"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
              />
              <button className="perfil__btn-save" onClick={guardarNombre}>✓</button>
              <button className="perfil__btn-cancel" onClick={() => setEditando(false)}>✕</button>
            </div>
          ) : (
            <div className="perfil__nombre-row">
              <h1 className="perfil__nombre">{usuario.nombre} {usuario.insignia}</h1>
              <button className="perfil__btn-edit" onClick={() => setEditando(true)}>✏️</button>
            </div>
          )}
          <p className="perfil__handle">{usuario.usuario}</p>
          <div className="perfil__badges">
            <span className="perfil__badge" style={{ borderColor: usuario.color, color: usuario.color }}>
              Nivel {usuario.nivel}
            </span>
            <span className="perfil__badge">🔥 Racha {usuario.racha} días</span>
          </div>
        </div>

        <div className="perfil__puntos">
          <span className="perfil__puntos-num" style={{ color: usuario.color }}>
            {usuario.puntos.toLocaleString()}
          </span>
          <span className="perfil__puntos-lbl">puntos totales</span>
        </div>
      </div>

      {/* Estadísticas rápidas */}
      <div className="perfil__stats-grid">
        {[
          { label: "Juegos Jugados", val: usuario.juegosJugados, icon: "🎮" },
          { label: "Nivel Actual",   val: usuario.nivel,         icon: "⚡" },
          { label: "Racha Actual",   val: `${usuario.racha} días`, icon: "🔥" },
          { label: "Ranking",        val: "#1",                  icon: "🏆" },
        ].map((s) => (
          <div className="perfil__stat-box" key={s.label}>
            <span className="perfil__stat-icon">{s.icon}</span>
            <span className="perfil__stat-val" style={{ color: usuario.color }}>{s.val}</span>
            <span className="perfil__stat-lbl">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Historial de juegos */}
      <div className="perfil__historial">
        <h2 className="perfil__section-titulo">Últimas Partidas</h2>
        <div className="perfil__historial-lista">
          {historial.map((j) => (
            <div className="perfil__historial-item" key={j.id} style={{ "--item-color": j.color }}>
              <span className="perfil__historial-emoji">{j.emoji}</span>
              <div>
                <div className="perfil__historial-nombre">{j.titulo}</div>
                <div className="perfil__historial-cat">{j.categoria}</div>
              </div>
              <span className="perfil__historial-pts">+350 pts</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Perfil;
