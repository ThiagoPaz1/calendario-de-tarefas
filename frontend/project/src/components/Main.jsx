import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { 
       MainStyle,
       AddTaskStyle, 
       SectionStyle, 
       FiltersTastks,
       FilterTitle } from './styles';

import Tasks from './Tasks';
import { TaskContext } from '../context/Tasks';

function Main() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [titleTasks, setTitleTasks] = useState(''); 
  const [message, setMessage] = useState();
  const [specificPeriod, setSpecificPeriod] = useState(''); 

  useEffect(() => {
    axios.get('http://localhost:3000/task/all-task')
    .then((response) => setTasks(response.data))
    .catch(() => console.log('Houve um erro.'));
  }, []);

  const handleChange = ({ target }) => {
    setTitleTasks(target.value);
  }

  const handleChangePeriod = ({ target}) => {
    setSpecificPeriod(target.value);
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
      setTitleTasks('');
      return setTasks(findTasks);
    } 
  }

  const findSpecificPeriod = () => {
    const findTasks = tasks.filter(element => element.date == specificPeriod);
    
    if (!specificPeriod || specificPeriod === '' || specificPeriod === '') {
     return setMessage('É necessário digitar algum de data de tarefa.');
    }

    if (findTasks.length == 0) {
      return setMessage('Nenhuma tarefa com esse data encontrada');
    }

    if (specificPeriod !== ' ') {
      setSpecificPeriod('');
      return setTasks(findTasks);
    } 
  }

  return (
    <MainStyle>
      <main>
        <h1>App de Tarefas</h1>
        <AddTaskStyle>
          <Link
            style={{
              backgroundColor: '#A4A4A4',
              padding: '5px',
              textDecoration: 'none',
              color: 'black',
              border: '1.5px grey solid',
              borderRadius: '5px',
            }}
            to="/addOrEdit/show"
          >
            <span>Adicionar nova tarefa</span>
          </Link>
        </AddTaskStyle>
        <SectionStyle>
          <section>
            <h3>Deseja vizualizar em qual período de tempo?</h3>
            <FiltersTastks>
              <div>
                <label>
                  Dia
                  <input name="day" onClick={filterDay} type="checkbox" />
                </label>
                <label>
                  Mês
                  <input name="month" onClick={filterMonth} type="checkbox" />
                </label>
                <label style={{marginLeft: '30px'}}>
                  Pesquisar por periodo especifico
                  <input
                    style={{
                      marginLeft: '5px',
                      width: 120,
                    }}
                    value={specificPeriod}
                    type="text"
                    placeholder="Exemplo: 01/02/03"
                    onChange={handleChangePeriod}
                  />
                </label>
                <button onClick={findSpecificPeriod}>Pesquisar</button>
              </div>
            </FiltersTastks>
            <FilterTitle>
              <label style={{marginLeft: '50px'}}>
                Filtrar por título da tarefa
                <input
                  style={{marginLeft: '5px', width: 120}}
                  onChange={handleChange}
                  type="text"
                  value={titleTasks}
                  placeholder="Digite um título"
                />
              </label>
              <button onClick={findTitleTasks}>Pesquisar</button>
            </FilterTitle>
            <h3>{ message }</h3>
            <Tasks />
          </section>
        </SectionStyle>
      </main>
    </MainStyle>  
  );
}

export default Main;