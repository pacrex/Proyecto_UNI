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
    labels: ['Rojo', 'Azul', 'Verde', 'Desconocido'],
    datasets: [
      {
        label: 'Colores',
        data: [8, 5, 7, 10],
        backgroundColor: ['#fd0000', '#005fca', '#00af05', '#292b27'],
        hoverBackgroundColor: ['#ff4a4a', '#2f6eb5', '#55db43', '#888a85'],
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
    scales:{
      y:{
          ticks: {
              color: "#db0ad5",
              font:{size: 18},
              stepSize: 1,
              beginAtZero: true
          }
      },
      x:{
          ticks: {
              color: "white",
              font:{size: 18},
              stepSize: 1,
              beginAtZero: true
          }
      }
    }
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
    scales:{
      y:{
          ticks: {
              color: "black",
              font:{size: 18},
              stepSize: 1,
              beginAtZero: true
          }
      },
      x:{
          ticks: {
              color: "white",
              font:{size: 18},
              stepSize: 1,
              beginAtZero: true
          }
      }
    }
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
          <p>Aqui se muestra la informacion en tiempo real de los colores que ya hayan sido ya escaneados</p>
          <div className="chart horizontal-bar-chart">
            <h3>Gráfico de Barras Horizontal</h3>
            <Bar data={sharedData} options={barOptions} />
          </div>
        </section>

        <section className="section counter">
          <h2></h2>
          <div className="ventana">
            Aqui va el creador y lector de qr
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
