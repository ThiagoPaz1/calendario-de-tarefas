import React from 'react';
import { Link } from 'react-router-dom';

import RegisterTask from '../components/RegisterTask';

function AddOrEditArea() {
  return (
    <div>
      <RegisterTask />
      <Link to="/">
        <span>Retorna a página inicial</span>
      </Link>
    </div>
  );
}

export default AddOrEditArea;