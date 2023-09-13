const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const http = require('http')

// for relative path calling
require('rootpath')();

const port = 4001;

// parse json body to middleware
app.use(bodyParser.json())

app.use('/user', require ('./controller.js'))

// start server and listen on port number
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});