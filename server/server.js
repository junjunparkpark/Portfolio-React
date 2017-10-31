'use strict';
const path = require('path');
const express = require('express');
const app = express();

const connection = require('http').createServer(app);

app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('*', function(req, res){
  console.log('Serving /')
  res.sendFile(path.join(__dirname + '../client/dist/index.html'));
});

module.exports = connection;