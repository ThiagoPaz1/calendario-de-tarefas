import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { TaskContext } from '../context/Tasks';

function Tasks() {
  const { tasks, setTasks } = useContext(TaskContext);

  const deleteTask = (item) => {
    axios.delete(`http://localhost:3000/task/remove-task/${item._id}`)
    .then(() => {
      axios.get('http://localhost:3000/task/all-task')
      .then((response) => setTasks(response.data))
      .catch(() => console.log('Houve um erro.'));   
    })
    .catch(() => console.log('Houve um erro.'));
  }
  return (
    <div>
      Tarefas
      <ul>
      {
        tasks ? tasks.map((item, index) =>
          <li key={ index }>
            <div>Título: {item.title}</div>
            <div>Descrição: { item.description }</div>
            <div>Data: { item.date }</div>
            <div>Tempo de duração: { item.timeDuration }</div>
            <Link to={`/addOrEdit/${item._id}`} >
              <button>Editar</button>
            </Link>
            <button onClick={ () => deleteTask(item) }>Deletar</button>
          </li>
        ) : ''
      }
     </ul>
    </div>
  );
}

export default Tasks;