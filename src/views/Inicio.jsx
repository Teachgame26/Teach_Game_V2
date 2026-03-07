import { useState } from "react";
import { STATS_PLATAFORMA, JUEGOS } from "../data/mockData";
import JuegosCard from "../components/JuegosCard";
import "./Inicio.css";

function Inicio({ onCambiarVista }) {
  const [stats] = useState(STATS_PLATAFORMA);
  const [juegosDestacados] = useState(JUEGOS.slice(0, 3));

  return (
    <div className="inicio">

      {/* Hero — sección principal */}
      <section className="inicio__hero">
        <div className="container">
          <p className="inicio__hero-sub">🎓 Plataforma Estudiantil</p>
          <h1 className="inicio__hero-titulo">
            Aprende.<br />
            <span className="inicio__hero-accent">Compite.</span><br />
            Evoluciona.
          </h1>
          <p className="inicio__hero-desc">
            La plataforma donde el conocimiento se convierte en poder.
            Juega, sube de nivel y demuestra que eres el mejor estudiante.
          </p>
          <div className="inicio__hero-btns">
            <button className="btn-primary" onClick={() => onCambiarVista("juegos")}>
              Explorar Juegos ⚡
            </button>
            <button className="btn-secondary" onClick={() => onCambiarVista("ranking")}>
              Ver Ranking 🏆
            </button>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="inicio__stats container">
        <div className="inicio__stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-card__icon">{stat.icono}</span>
              <span className="stat-card__valor">{stat.valor}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Juegos destacados */}
      <section className="inicio__destacados container">
        <div className="section-header">
          <h2 className="section-titulo">Juegos Populares</h2>
          <button className="btn-ver-todo" onClick={() => onCambiarVista("juegos")}>
            Ver todos →
          </button>
        </div>
        <div className="inicio__juegos-grid">
          {juegosDestacados.map((juego) => (
            <JuegosCard key={juego.id} juego={juego} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Inicio;