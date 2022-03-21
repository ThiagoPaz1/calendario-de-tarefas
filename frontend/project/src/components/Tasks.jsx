import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { TaskContext } from '../context/Tasks';
import { MainTask } from './styles';

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
    <MainTask>
      <div>
        <h2>Tarefas</h2>
        <ul>
        {
          tasks ? tasks.map((item, index) =>
            <li key={ index }>
              <div><span>Título:</span> {item.title}</div>
              <div><span>Descrição:</span> { item.description }</div>
              <div><span>Data:</span> { item.date }</div>
              <div><span>Tempo de duração:</span> { item.timeDuration }</div>
              <Link to={`/addOrEdit/${item._id}`} >
                <button style={{
                  backgroundColor: '#81F7F3',
                  }}
                >
                  Editar
                </button>
              </Link>
              <button
                style={{
                  backgroundColor: 'red',
                  marginLeft: '10px',
                }}
                onClick={ () => deleteTask(item) }
              >
                Deletar
              </button>
            </li>
          ) : ''
        }
        </ul>
      </div>
    </MainTask>
  );
}

export default Tasks;