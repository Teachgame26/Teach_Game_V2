import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./views/Inicio";
import Juegos from "./views/Juegos";
import Ranking from "./views/Ranking";
import Perfil from "./views/Perfil";
import Login from "./components/Login";
import Register from "./components/Register";
import TratamientoDatos from "./components/TratamientoDatos"; // 🆕 IMPORT
import "./App.css";

function App() {
  // 🔐 Estado de autenticación
  const [isAuth, setIsAuth] = useState(false);

  // 🆕 Estado para tratamiento de datos
  const [aceptoDatos, setAceptoDatos] = useState(false);

  // 🔁 Control login / register
  const [authVista, setAuthVista] = useState("login");

  // 📌 Navegación interna
  const [vistaActiva, setVistaActiva] = useState("inicio");

  // 🧠 Render de vistas internas
  const renderVista = () => {
    switch (vistaActiva) {
      case "inicio":
        return <Inicio onCambiarVista={setVistaActiva} />;
      case "juegos":
        return <Juegos />;
      case "ranking":
        return <Ranking />;
      case "perfil":
        return <Perfil />;
      default:
        return <Inicio onCambiarVista={setVistaActiva} />;
    }
  };

  // 🚪 Logout
  const handleLogout = () => {
    setIsAuth(false);
    setAuthVista("login");
    setVistaActiva("inicio");
  };

  // 🛑 PRIMERO: tratamiento de datos
  if (!aceptoDatos) {
    return <TratamientoDatos onAceptar={() => setAceptoDatos(true)} />;
  }

  // 🔐 DESPUÉS: autenticación
  if (!isAuth) {
    return authVista === "login" ? (
      <Login
        onSwitch={() => setAuthVista("register")}
        onLogin={() => setIsAuth(true)}
      />
    ) : (
      <Register
        onSwitch={() => setAuthVista("login")}
        onLogin={() => setIsAuth(true)}
      />
    );
  }

  // 🚀 App principal
  return (
    <div className="app">
      <Navbar
        vistaActiva={vistaActiva}
        onCambiarVista={setVistaActiva}
        onLogout={handleLogout}
      />

      <main className="app__main">
        {renderVista()}
      </main>

      <Footer />
    </div>
  );
}

export default App;