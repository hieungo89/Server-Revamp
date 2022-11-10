const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes.js');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/', router);
app.get('/loaderio-3b362b806361fab92945019b57e2a053.txt', (req, res) => {
  res.send('loaderio-3b362b806361fab92945019b57e2a053')
})

const port = 3001;
app.listen(port, console.log(`Listening on port: ${port}`));