import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./views/Inicio";
import Juegos from "./views/Juegos";
import Ranking from "./views/Ranking";
import Perfil from "./views/Perfil";
import "./App.css";

function App() {
  // Estado que controla qué pantalla se muestra
  const [vistaActiva, setVistaActiva] = useState("inicio");

  // Según el estado muestra una vista u otra
  const renderVista = () => {
    switch (vistaActiva) {
      case "inicio":  return <Inicio onCambiarVista={setVistaActiva} />;
      case "juegos":  return <Juegos />;
      case "ranking": return <Ranking />;
      case "perfil":  return <Perfil />;
      default:        return <Inicio onCambiarVista={setVistaActiva} />;
    }
  };

  return (
    <div className="app">
      <Navbar
        vistaActiva={vistaActiva}
        onCambiarVista={setVistaActiva}
      />
      <main className="app__main">
        {renderVista()}
      </main>
      <Footer />
    </div>
  );
}

export default App;