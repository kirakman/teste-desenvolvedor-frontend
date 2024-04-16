import React, { useEffect, useState } from 'react';
import './Content.css';
import medicamentosData from '../src/db.json';

function Content() {
  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
    setMedicamentos(medicamentosData.data);
  }, []);

  return (
    <div className='all-content'> 
      <h1>Tabela de medicamentos</h1>
      <div className='table-container'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Data de Publicação</th>
              <th>Empresa</th>
            </tr>
          </thead>
          <tbody>
            {medicamentos.map(medicamento => (
              <tr key={medicamento.id}>
                <td>{medicamento.id}</td>
                <td>{medicamento.name}</td>
                <td>{medicamento.published_at}</td>
                <td>{medicamento.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Content;
