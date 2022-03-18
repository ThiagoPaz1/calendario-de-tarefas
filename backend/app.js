const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const cors = require('cors');
const taskRouters = require('./src/routers/taskRouters');
const app = express();

dotenv.config();

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Mongo conectado');
    }
  });

app.use(function (_req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  // // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // // Set to true if you need the website to include cookies in the requests sent
  // // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyParser.json());
app.use('/task', taskRouters);

app.listen(process.env.PORT, () => {
  console.log('Servidor conectado.')
});