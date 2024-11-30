import { useState } from 'react';
import './App.css'; // Aquí van los estilos
import { Doughnut, Line, Bar } from 'react-chartjs-2'; // Importa Bar para la gráfica de barras
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Registrar componentes necesarios para Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, PointElement);

function App() {

  const [counter, setCounter] = useState(0);

  // Datos compartidos para todas las gráficas
  const sharedData = {
    labels:  colores,
    datasets: [
      {
        label: 'Colores',
        data:   valores,
        backgroundColor: ['#fd0000', '#005fca', '#00af05', '#292b27'],
        hoverBackgroundColor: ['#ff4a4a', '#2f6eb5', '#55db43', '#888a85'],
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#E0E0E0', // Cambiar el color de la leyenda
          font: { size: 16 }, // Cambiar el tamaño de la fuente de la leyenda
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#db0ad5', // Color de las etiquetas del eje Y
          font: { size: 18 }, // Tamaño de la fuente de las etiquetas
        },
      },
      x: {
        ticks: {
          color: 'white', // Color de las etiquetas del eje X
          font: { size: 18 }, // Tamaño de la fuente de las etiquetas
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#E0E0E0', // Cambiar el color de la leyenda
          font: { size: 16 }, // Cambiar el tamaño de la fuente de la leyenda
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`; // Personalizar el tooltip
          },
        },
      },
    },
  };

  return (
    <div className="app">
      <main className="main-content">
        {/* Sección Gráfico de Dona */}
        <section className="section">
          <h3>Gráfico de Dona</h3>
          <div className="chart donut-chart">
            <Doughnut data={sharedData} options={doughnutOptions} />
          </div>
        </section>

        {/* Sección Gráfico de Barras Horizontal */}
        <section className="section">
          <h3>Gráfico de Barras Horizontal</h3>
          <div className="chart horizontal-bar-chart">
            <Bar data={sharedData} options={barOptions} />
          </div>
        </section>

        {/* Sección Lector y Creador de QR (debajo de las otras secciones) */}
        {/* <section className="section ventana-section">
          <h3>Lector y Creador de QR</h3>
          <div className="ventana">Aquí va el creador y lector de QR</div>
        </section> */}
      </main>

      {/* Pie de página */}
      <footer>
        <p>&copy; 2024 Mi Proyecto Color. JORGE ES RE SIMP</p>
      </footer>
    </div>
  );
}

export default App;
