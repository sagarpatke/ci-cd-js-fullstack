const express = require('express');

const app = express();

app.use('/', express.static('server/static'));

app.get('/api/echo/:name', (req, res) => {
  res.status(200).json({message: `Hello, ${req.params.name || 'World'}!`});
});

module.exports = app;
