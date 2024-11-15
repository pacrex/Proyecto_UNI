import { useState } from 'react';
import './App.css'; // Aquí van los estilos

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {/* Barra de navegación */}
      <header className="header">
        <nav>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Acerca de</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Contenido principal en una cuadrícula 2x2 */}
      <main className="main-content">
        <section className="section welcome">
          <h1>Graficas</h1>
          <p>Este es un ejemplo básico de una página web con React.</p>
        </section>

        <section className="section info">
          <h2>Informacion</h2>
          <p>React es una librería de JavaScript para construir interfaces de usuario. Permite crear componentes reutilizables y gestionar el estado de manera eficiente.</p>
        </section>

        <section className="section counter">
          <h2>QR</h2>
          <div className="ventana">
            <button onClick={() => setCount(count + 1)}>
              Incrementar
            </button>
            <button onClick={() => setCount(count - 1)}>
              Decrementar
            </button>
            <button onClick={() => setCount(0)}>
              Resetear
            </button>
            <p>El contador es: {count}</p>
          </div>
        </section>

      </main>

      {/* Pie de página */}
      <footer>
        <p>&copy; 2024 Mi Proyecto Color. JORGE ES RE SIMP</p>
      </footer>
    </div>
  );
}

export default App;
