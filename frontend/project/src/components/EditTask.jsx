import React, { useState, useContext } from 'react';

import axios from 'axios';

import { TaskContext } from '../context/Tasks';
import { EditStyle } from './styles';

function EditTask({ dataTask }) {
  const { tasks } = useContext(TaskContext);
  const findTask = tasks.find(element => element._id === dataTask);

  const { title, description, date, timeDuration, _id } = findTask;
  const [titleEdit, setTitleEdit] = useState(title);
  const [descriptionEdit, setDescriptionEdit] = useState(description);
  const [dateEdit, setDateEdit] = useState(date);
  const [timeDurationEdit, setTimeDurationEdit] = useState(timeDuration);
  const [message, setMessage] = useState('');

  const handleChangeTitle = (event) => {
    const { value } = event.target;
    setTitleEdit(value);
  }

  const handleChangeDescription = (event) => {
    const { value } = event.target;
    setDescriptionEdit(value);
  }

  const handleChangeDate = (event) => {
    const { value } = event.target;
    setDateEdit(value);
  }

  const handleChangeTimeDuration = (event) => {
    const { value } = event.target;
    setTimeDurationEdit(value);
  }

  const editSave = (event) => {
    event.preventDefault();

    const titleCheck = title !== titleEdit;
    const descriptionCheck = description !== descriptionEdit;
    const dateCheck = date !== dateEdit;
    const timeCheck = timeDuration !== timeDurationEdit;
  
    const bodyReq = {
      title: titleEdit,
      description: descriptionEdit,
      date: dateEdit,
      timeDuration: timeDurationEdit,
    }

    if (titleCheck || descriptionCheck || dateCheck || timeCheck) {
      axios.put(`http://localhost:3000/task/edit-task/${_id}`, bodyReq)
      .then((response) => {
        setTitleEdit('');
        setDescriptionEdit('');
        setDateEdit('');
        setTimeDurationEdit('');

        console.log(response);
      })
      .catch(() => console.log('Houve um erro.'));
    } else {
      setMessage('É necessário altera algum campo.')
    }
  }

  return (
    <EditStyle>
      <div>
      <h1>Editar tarefa</h1>
          <form style={{display: 'flex'}}>
          <div>
            <label>
              <span>Titulo</span><br />
              <input value={titleEdit} onChange={handleChangeTitle} type="text" />
            </label>
            <label>
            <span>Descrição</span><br />
              <textarea 
                value={descriptionEdit}
                onChange={handleChangeDescription}
                type="text"
              />
            </label>
            <label>
            <span>Data</span><br />
              <input value={dateEdit} onChange={handleChangeDate} type="text" />
            </label>
            <label>
            <span>Tempo de duração</span><br />
              <input
                value={timeDurationEdit}
                onChange={handleChangeTimeDuration}
                type="text"
              />
            </label>
          </div> 
          <button onClick={editSave}>Salvar</button>
        </form>
        <h1>{ message }</h1>
      </div>
    </EditStyle>  
  );
}

export default EditTask;