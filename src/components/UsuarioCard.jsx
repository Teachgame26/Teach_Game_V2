import "./UsuarioCard.css";

function UsuarioCard({ usuario, posicion }) {
  const { nombre, usuario: handle, nivel, puntos, insignia, racha, avatar, color } = usuario;

  const medallaClase =
    posicion === 1 ? "medalla--oro" :
    posicion === 2 ? "medalla--plata" :
    posicion === 3 ? "medalla--bronce" : "";

  return (
    <div className="usuario-card" style={{ "--user-color": color }}>

      {/* Posición en el ranking */}
      <div className={`usuario-card__posicion ${medallaClase}`}>
        {posicion === 1 ? "🥇" : posicion === 2 ? "🥈" : posicion === 3 ? "🥉" : `#${posicion}`}
      </div>

      {/* Avatar */}
      <div
        className="usuario-card__avatar"
        style={{ background: `linear-gradient(135deg, ${color}, #080b14)` }}
      >
        {avatar}
      </div>

      {/* Información */}
      <div className="usuario-card__info">
        <div className="usuario-card__nombre">
          {nombre} <span>{insignia}</span>
        </div>
        <div className="usuario-card__handle">{handle}</div>
      </div>

      {/* Estadísticas */}
      <div className="usuario-card__stats">
        <div className="usuario-card__stat">
          <span className="stat-num">{puntos.toLocaleString()}</span>
          <span className="stat-lbl">pts</span>
        </div>
        <div className="usuario-card__stat">
          <span className="stat-num">Nv.{nivel}</span>
          <span className="stat-lbl">nivel</span>
        </div>
        <div className="usuario-card__stat">
          <span className="stat-num">{racha}🔥</span>
          <span className="stat-lbl">racha</span>
        </div>
      </div>

    </div>
  );
}

export default UsuarioCard;