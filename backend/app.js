const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const taskRouters = require('./src/routers/taskRouters');
const app = express();

dotenv.config();

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true }, 
  (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Mongo conectado');
  }
});

app.use(bodyParser.json());
app.use('/task', taskRouters);

app.listen(process.env.PORT, () => {
  console.log('Servidor conectado.')
});