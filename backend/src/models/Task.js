const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  timeDuration: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskSchema);