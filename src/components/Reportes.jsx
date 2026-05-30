import { useEffect, useState } from "react";

function Reportes() {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://teach-game-analisis-datos-python.vercel.app/api/interno/datos-limpios"
    )
      .then((response) => response.json())
      .then((data) => {
        setDatos(data.payload);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Reportes</h1>

      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <ul>
          {datos.map((item) => (
            <li key={item.id}>
              ID: {item.id} - Valor: {item.valor}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reportes;