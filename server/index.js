'use strict';
const connection = require('./server.js');
const PORT = process.env.port || 3000;


connection.listen(PORT, () => {
  console.log('Server listening on port 3000!');
});