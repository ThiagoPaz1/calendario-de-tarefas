import React from 'react';
import { Link } from 'react-router-dom';

function AddOrEditArea() {
  return (
    <div>
      Você esta na página criação ou edição de uma tarefa <br />
      <Link to="/">
        <span>Retorna a página inicial</span>
      </Link>
    </div>
  );
}

export default AddOrEditArea;