import React, { useContext, useState } from 'react';

import { TaskContext } from '../context/Tasks';

function Tasks() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <ul>
      {
        tasks.map((item, index) =>
          <li key={ index }>
            Título: {item.title}
            Descrição: { item.description }
            Data: { item.date }
            tempo de duração: { item.timeDuration }
          </li>
        )
      }
     </ul>
    </div>
  );
}

export default Tasks;