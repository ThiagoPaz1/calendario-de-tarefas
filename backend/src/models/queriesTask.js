const Task = require('./Task');

const findDB = async (value) => {
  const checkValueDB = await Task.findOne(value);

  return checkValueDB;
}

module.exports = {
  findDB,
}