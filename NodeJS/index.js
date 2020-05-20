const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { cassandra } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');
var departmentController = require('./controllers/departmentController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/employees', employeeController);
app.use('/Department', departmentController);