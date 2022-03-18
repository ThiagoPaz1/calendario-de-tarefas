import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import { TaskContext } from '../context/Tasks';

function Tasks() {
  const { tasks, setTasks } = useContext(TaskContext);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/task/all-task')
  //   .then((response) => setTasks([...tasks, response.data]))
  //   .catch(() => console.log('Houve um erro.'));
  // }, []);

  return (
    <div>
      TAREFAS
      <ul>
      {/* {
        tasks.map((item, index) =>
          <li key={ index }>
            Título: {item.title}
            Descrição: { item.description }
            Data: { item.date }
            tempo de duração: { item.timeDuration }
          </li>
        )
      } */}
     </ul>
    </div>
  );
}

export default Tasks;