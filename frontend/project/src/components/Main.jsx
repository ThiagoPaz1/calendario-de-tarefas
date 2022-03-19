import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Tasks from './Tasks';
import { TaskContext } from '../context/Tasks';

function Main() {
  const { setTasks } = useContext(TaskContext);

  useEffect(() => {
    axios.get('http://localhost:3000/task/all-task')
    .then((response) => {
      setTasks(response.data)
    })
    .catch(() => console.log('Houve um erro.'));
  }, []);

  return (
    <main>
      <h1>Tarefas do dia</h1>
      <Link to="/addOrEdit/show">
        <span>Adicionar nova tarefa</span>
      </Link>
      <h3>Deseja vizualizar em qual período de tempo?</h3>
      <label>
        Dia
        <input type="checkbox" />
      </label>
      <label>
        Semana
        <input type="checkbox" />
      </label>
      <label>
        Mês
        <input type="checkbox" />
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