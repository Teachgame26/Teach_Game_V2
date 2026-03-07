import { useState } from "react";
import { USUARIOS } from "../data/mockData";
import UsuarioCard from "../components/UsuarioCard";
import "./Ranking.css";

function ListaUsuarios({ usuarios }) {
  return (
    <div className="lista-usuarios">
      {usuarios.map((usuario, index) => (
        <UsuarioCard
          key={usuario.id}
          usuario={usuario}
          posicion={index + 1}
        />
      ))}
    </div>
  );
}

function Ranking() {
  const [usuarios] = useState(USUARIOS);

  return (
    <div className="ranking container">

      <div className="ranking__header">
        <h1 className="ranking__titulo">🏆 Ranking Global</h1>
        <p className="ranking__sub">Los mejores estudiantes de la plataforma</p>
      </div>

      <div className="ranking__podio">
        {usuarios.slice(0, 3).map((u, i) => (
          <div
            key={u.id}
            className={`podio-item podio-item--${i + 1}`}
            style={{ "--user-color": u.color }}
          >
            <div className="podio-item__avatar">{u.avatar}</div>
            <div className="podio-item__nombre">{u.nombre.split(" ")[0]}</div>
            <div className="podio-item__puntos">{u.puntos.toLocaleString()} pts</div>
            <div className="podio-item__pos">{["🥇","🥈","🥉"][i]}</div>
          </div>
        ))}
      </div>

      <h2 className="ranking__lista-titulo">Clasificación Completa</h2>
      <ListaUsuarios usuarios={usuarios} />

    </div>
  );
}

export default Ranking;
