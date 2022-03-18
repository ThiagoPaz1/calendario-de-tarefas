import React from 'react';
import { Link } from 'react-router-dom';

import Tasks from './Tasks';

function Main() {
  return (
    <main>
      <h1>Tarefas do dia</h1>
      <Link to="/addOrEdit">
        <span>Adicionar nova tarefa</span>
      </Link>
      <h3>Deseja vizualizar em qual período de tempo?</h3>
      <label>
        Dia
        <input type="radio" />
      </label>
      <label>
        Semana
        <input type="radio" />
      </label>
      <label>
        Mês
        <input type="radio" />
      </label>
      <label style={{marginLeft: '50px'}}>
        Filtrar por título da tarefa
        <input style={{marginLeft: '5px'}} type="text" placeholder='Digite um título'/>
      </label>
      <Tasks />
    </main>
  );
}

export default Main;