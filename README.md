# TeachGame — Plataforma Estudiantil de Juegos

Una plataforma educativa interactiva construida con React y Vite, donde los estudiantes pueden explorar juegos educativos, ver el ranking de jugadores y gestionar su perfil.

---

## 🚀 Tecnologías Utilizadas

**React 18** — Librería principal para construir la interfaz
**Vite** — Herramienta de desarrollo rápida
**CSS Modules** — Estilos por componente
**useState** — Manejo de estado local

---

## 📁 Estructura del Proyecto
src/
├── components/        # Componentes reutilizables
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Footer.jsx
│   ├── Footer.css
│   ├── JuegosCard.jsx
│   ├── JuegosCard.css
│   ├── UsuarioCard.jsx
│   └── UsuarioCard.css
├── views/             # Vistas principales
│   ├── Inicio.jsx
│   ├── Inicio.css
│   ├── Juegos.jsx
│   ├── Juegos.css
│   ├── Ranking.jsx
│   ├── Ranking.css
│   ├── Perfil.jsx
│   └── Perfil.css
├── data/              # Datos simulados (mock data)
│   └── mockData.js
├── App.jsx            # Componente raíz
├── App.css
├── main.jsx
└── index.css

---

## 🧩 Árbol de Componentes
App
├── Navbar
├── Inicio
│   ├── StatCard (x4)
│   └── JuegosCard (x3)
├── Juegos
│   └── JuegosCard (x6)
├── Ranking
│   └── ListaUsuarios
│       └── UsuarioCard (x5)
├── Perfil
└── Footer

---

## 📦 Instalación y Uso

### 1. Clonar o descargar el proyecto
bash
git clone <url-del-repositorio>
cd gamezone-estudiantil

### 2. Instalar dependencias
bash
npm install

### 3. Correr en modo desarrollo
bash
npm run dev

### 4. Abrir en el navegador
http://localhost:5173

---

## 🎮 Vistas de la Aplicación

| Vista | Descripción |
|-------|-------------|
| **Inicio** | Pantalla principal con hero, estadísticas y juegos destacados |
| **Juegos** | Catálogo completo con buscador y filtros por categoría |
| **Ranking** | Tabla de clasificación con podio y lista de usuarios |
| **Perfil** | Perfil del jugador con estadísticas e historial de partidas |

---

## 🗂️ Mock Data

Los datos simulados se encuentran en src/data/mockData.js e incluyen:

**JUEGOS** — 6 juegos educativos con categoría, dificultad y descripción
**USUARIOS** — 5 usuarios con puntos, nivel y racha
**STATS_PLATAFORMA** — Estadísticas generales de la plataforma
**CATEGORIAS** — Lista de categorías para filtrar juegos

---


## 👤 Autor

** Mayerlin Cubides
** Paola Arizmendy
** Johana Peña
