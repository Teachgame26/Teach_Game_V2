import "./Reportes.css";

function Reportes() {
  return (
    <div className="reportes-container">
      <h1>📊 Reportes y Análisis de Datos</h1>

      <p className="reportes-descripcion">
        En esta sección se muestran los resultados obtenidos del análisis de
        datos realizado sobre la plataforma Teach Game. La información ha sido
        procesada mediante Python para generar reportes estadísticos y gráficos
        que apoyan la toma de decisiones.
      </p>

      <div className="reporte-card">
        <h2>📈 Gráfico de Análisis</h2>

        <img
          src="https://teach-game-analisis-datos-python.vercel.app/imagen"
          alt="Reporte generado por Python"
          className="reporte-imagen"
        />
      </div>
    </div>
  );
}

export default Reportes;