const Task = require('./Task');

const findDB = async (value) => {
  const checkValueDB = await Task.findOne(value);

  return checkValueDB;
}

const findAllDB = async () => {
  const all = await Task.find({});

  return all;
} 

const update = async (id, newValue) => {
  const editTask = await Task.updateOne(id, newValue);
  
  return editTask;
}

module.exports = {
  findDB,
  findAllDB,
  update
}