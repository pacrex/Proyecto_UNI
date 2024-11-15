import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Aplicación React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          El contador es {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> para personalizar tu aplicación.
        </p>
      </div>
    </div>
  );
}

export default App;