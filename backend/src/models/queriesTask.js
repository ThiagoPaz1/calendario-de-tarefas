const Task = require('./Task');

const findDB = async (value) => {
  const checkValueDB = await Task.findOne(value);

  return checkValueDB;
}

const findAllDB = async () => {
  const all = await Task.find({});

  return all;
}

module.exports = {
  findDB,
  findAllDB
}