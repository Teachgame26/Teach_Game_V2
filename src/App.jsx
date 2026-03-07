import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { usuariosMock } from './data/usuarios'
import UsuarioCard from './components/UsuarioCard'

function App() {
  const [count, setCount] = useState(0)
  const [usuarios, setUsuarios] = useState(usuariosMock)

  return (
<>
    <div>
      <h1>Lista de Miembros del Equipo</h1>
      <div className="contenedor-cards">
        {usuarios.map((user) => (
          <UsuarioCard
          key={user.id}
          nombre={user.nombre}
          rol={user.rol}
          />
        ))}
        </div>
        </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
