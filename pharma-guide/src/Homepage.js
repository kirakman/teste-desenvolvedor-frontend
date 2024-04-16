import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <header className="header">
      <div className="left">
        <h1>Pharma-Guide</h1>
      </div>
      <div className="right">
        <input type="text" placeholder="Pesquisar medicamento" />
      </div>
    </header>
  );
}

export default Homepage;
