import { useState } from 'react';
import './App.css'; // Aquí van los estilos
import { Doughnut, Line, Bar } from 'react-chartjs-2'; // Importa Bar para la gráfica de barras
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Registrar componentes necesarios para Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, PointElement);

function App() {
  const [count, setCount] = useState(0);

  // Datos compartidos para todas las gráficas
  const sharedData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas',
        data: [65, 59, 80, 81, 56],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
    ],
  };

  // Opciones para la gráfica horizontal
  const barOptions = {
    indexAxis: 'y', // Cambia la orientación de la gráfica
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  // Opciones para el gráfico de dona
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false, // Permite personalizar el tamaño
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="app">

      {/* Contenido principal en una cuadrícula 2x2 */}
      <main className="main-content">
        <section className="section welcome">
          <h1>Gráficas</h1>
          <div className="charts-container">
            {/* Gráfico de Dona */}
            <div className="chart donut-chart">
              <h3>Gráfico de Dona</h3>
              <Doughnut data={sharedData} options={doughnutOptions} />
            </div>
            {/* Gráfico de Picos */}
            <div className="chart">
              <h3>Gráfico de Picos</h3>
              <Line data={sharedData} />
            </div>
          </div>
        </section>

        <section className="section info">
          <h2>Información</h2>
          <p>React es una librería de JavaScript para construir interfaces de usuario. Permite crear componentes reutilizables y gestionar el estado de manera eficiente.</p>
          <div className="chart horizontal-bar-chart">
            <h3>Gráfico de Barras Horizontal</h3>
            <Bar data={sharedData} options={barOptions} />
          </div>
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
