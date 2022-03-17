const Task = require('../models/Task');
const queriesTask = require('../models/queriesTask');
const moment = require('moment');

const validateBodyReq = async (req, res, next) => {
  const {title, description, date, timeDuration} = req.body;
  const arr = [title, description, date, timeDuration];
  const validDate = moment(date, 'DD/MM/YY', true).isValid() == false;

  if (await queriesTask.findDB({title: title})) {
    return res.status(400).json({message: "Título já cadastrado em outra tarefa"});
  }

  if (await queriesTask.findDB({description: description})) {
    return res.status(400).json({message: "Descrição já cadastrado em outra tarefa"});
  }

  if (validDate) {
    return res.status(400).json({message: "O campo da date, deve esta nesse formato DD/MM/YY ."});
  }

  for (let i in arr) {
    const  checkStr = arr[i] == '' || arr[i] == ' ';
    let checkBool = Boolean(arr[i]) == false;

    if (checkStr || checkBool) {
      return res.status(400).json({message: " Todos os campos devem esta preenchidos."});
    }
  }

  next();
}

const resRegisterTask = async (req, res) => {
  const {title, description, date, timeDuration} = req.body;
  
  const task = new Task({
    title: title,
    description: description,
    date: date,
    timeDuration: timeDuration
  });

  try {
    await task.save();

    return res.status(200).json({message: 'Tarefa salva com sucesso!'});
  } catch (error) {
    res.send(error);
  } 
}

const allTask = async (_req, res) => {
  const allDatas = await queriesTask.findAllDB();
  
  try {
    return res.status(200).json(allDatas);
  } catch (error) {
    res.send(error);
  }
}

const findTask = async (req, res) => {
  const { title } = req.params;
  const checkStr = title == '' || title == ' ';
  const checkBool = title == false;
  const taskFind = await queriesTask.findDB({title: title});

  if (!taskFind) {
    return res.status(400).json({message: 'title não encontrado.'});
  }

  if (checkStr || checkBool) {
    return res.status(400).json({message: 'title inválido, verifique se title não esta vazio.'});
  }

  return res.status(200).json(taskFind);
}  

module.exports = {
  validateBodyReq,
  resRegisterTask,
  allTask,
  findTask
}