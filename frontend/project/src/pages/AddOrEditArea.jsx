import React from 'react';
import { Link, useParams } from 'react-router-dom';

import RegisterTask from '../components/RegisterTask';
import EditTask from '../components/EditTask';
import { AddEditStyle } from '../components/styles';

function AddOrEditArea() {
  const { active } = useParams();

  return (
    <AddEditStyle>
      <div>
        { active === 'show' ? <RegisterTask /> : '' }
        { active !== 'show' ? <EditTask dataTask={ active } /> : '' }
        <Link
          style={{
            padding: '5px',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#2E2E2E',
            fontSize: 'bold',
            border: '1.5px #2E2E2E solid',
            borderRadius: '5px',
          }} 
          to="/"
        >
          <span style={{marginBottom: '500px',}}>Retorna a página inicial</span>
        </Link>
      </div>
    </AddEditStyle>
  );
}

export default AddOrEditArea;