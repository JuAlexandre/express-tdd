// connection.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

connection.connect(error => {
  if (error) {
    return console.error(`Error connecting: ${error.stack}`);
  }

  return console.log(`Connected as ID ${connection.threadId}`);
});

module.exports = connection;
