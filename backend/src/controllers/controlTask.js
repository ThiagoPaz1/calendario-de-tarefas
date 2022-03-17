const Task = require('../models/Task');
const queriesTask = require('../models/queriesTask');

const validateBodyReq = async (req, res, next) => {
  const {title, description, date, timeDuration} = req.body;
  const arr = [title, description, date, timeDuration];

  if (await queriesTask.findDB({title: title})) {
    return res.status(400).json({message: "Título já cadastrado em outra tarefa"});
  }

  if (await queriesTask.findDB({description: description})) {
    return res.status(400).json({message: "Descrição já cadastrado em outra tarefa"});
  }

  for (let i in arr) {
    let checkStr = arr[i] == '' || arr[i] == ' ';
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

module.exports = {
  validateBodyReq,
  resRegisterTask
}