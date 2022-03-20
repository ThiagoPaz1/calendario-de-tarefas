import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Tasks from './Tasks';
import { TaskContext } from '../context/Tasks';

function Main() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [titleTasks, setTitleTasks] = useState(''); 
  const [message, setMessage] = useState();

  useEffect(() => {
    axios.get('http://localhost:3000/task/all-task')
    .then((response) => setTasks(response.data))
    .catch(() => console.log('Houve um erro.'));
  }, []);

  const handleChange = ({ target }) => {
    setTitleTasks(target.value);
  }

  const filterDay = ({ target }) => {
    const date = new Date();
    const findDayTasks = tasks.filter(element => element.date.slice(0, 2) == date.getDate());

    if (target.checked) {
      setTasks(findDayTasks);
    } else {
      axios.get('http://localhost:3000/task/all-task')
      .then((response) => setTasks(response.data))
      .catch(() => console.log('Houve um erro.'));
    }
  }

  const filterMonth = ({ target }) => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const findMonthTasks = tasks.filter(element => element.date.slice(3, 5) == month);
    
    if (target.checked) {
      setTasks(findMonthTasks);
    } else {
      axios.get('http://localhost:3000/task/all-task')
      .then((response) => setTasks(response.data))
      .catch(() => console.log('Houve um erro.'));
    }
  }

  const findTitleTasks = () => {
    const findTasks = tasks.filter(element => element.title == titleTasks);
    
    if (!titleTasks || titleTasks === '' || titleTasks === '') {
     return setMessage('É necessário digitar algum de titulo de tarefa.');
    }

    if (findTasks.length == 0) {
      return setMessage('Nenhuma tarefa com esse titulo encontrada');
    }

    if (titleTasks !== ' ') {
      setTitleTasks('')
      return setTasks(findTasks);
    } 
  }

  return (
    <main>
      <h1>Tarefas do dia</h1>
      <Link to="/addOrEdit/show">
        <span>Adicionar nova tarefa</span>
      </Link>
      <h3>Deseja vizualizar em qual período de tempo?</h3>
      <label>
        Dia
        <input name="day" onClick={filterDay} type="checkbox" />
      </label>
      <label>
        Mês
        <input name="month" onClick={filterMonth} type="checkbox" />
      </label>
      <label style={{marginLeft: '50px'}}>
        Filtrar por título da tarefa
        <input 
          style={{marginLeft: '5px'}}
          onChange={handleChange}
          type="text"
          value={titleTasks}
          placeholder="Digite um título"
        />
      </label>
      <button onClick={findTitleTasks}>Pesquisar</button>
      <h3>{ message }</h3>
      <Tasks />
    </main>
  );
}

export default Main;