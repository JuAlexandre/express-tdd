// app.js
const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();
const connection = require('./connection');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello World!' });
});

app.post('/bookmarks', (req, res) => {
  if (!req.body.url || !req.body.title) {
    return res.status(422).json({ error: 'required field(s) missing' });
  }

  const bookmark = { url: req.body.url, title: req.body.title };

  connection.query('INSERT INTO bookmark SET ?', bookmark, (error, result) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    connection.query('SELECT * FROM bookmark WHERE id = ?', [result.insertId], (error, bookmarks) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(201).json(bookmarks[0]);
    })
  });
});

module.exports = app;
