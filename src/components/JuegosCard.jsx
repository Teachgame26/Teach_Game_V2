import "./JuegosCard.css";

function JuegosCard({ juego }) {
  const { titulo, categoria, dificultad, jugadores, rating, descripcion, color, emoji, badge } = juego;

  const dificultadClase =
    dificultad === "Fácil" ? "dificultad--facil" :
    dificultad === "Medio" ? "dificultad--medio" :
    "dificultad--dificil";

  return (
    <article className="juego-card" style={{ "--card-color": color }}>

      {badge && <span className="juego-card__badge">{badge}</span>}

      <div className="juego-card__emoji-wrap">
        <span className="juego-card__emoji">{emoji}</span>
      </div>

      <div className="juego-card__body">
        <div className="juego-card__meta">
          <span className="juego-card__categoria">{categoria}</span>
          <span className="juego-card__dificultad">{dificultad}</span>
        </div>

        <h3 className="juego-card__titulo">{titulo}</h3>
        <p className="juego-card__descripcion">{descripcion}</p>

        <div className="juego-card__stats">
          <span>👥 {jugadores.toLocaleString()}</span>
          <span>⭐ {rating}</span>
        </div>

        <button className="juego-card__btn">
          Jugar Ahora →
        </button>
      </div>

    </article>
  );
}

export default JuegosCard;