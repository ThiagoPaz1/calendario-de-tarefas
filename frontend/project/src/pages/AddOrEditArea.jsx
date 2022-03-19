import React from 'react';
import { Link, useParams } from 'react-router-dom';

import RegisterTask from '../components/RegisterTask';
import EditTask from '../components/EditTask';

function AddOrEditArea() {
  const { active } = useParams();

  return (
    <div>
      { active === 'show' ? <RegisterTask /> : '' }
      { active !== 'show' ? <EditTask dataTask={ active } /> : '' }
      <Link to="/">
        <span>Retorna a página inicial</span>
      </Link>
    </div>
  );
}

export default AddOrEditArea;