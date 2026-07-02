const express = require('express');
const routes = require('./routes');
const logger = require('./middlewares/logger');

const app = express();

app.use(express.json());
app.use(logger);
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Welcome to the backend API!');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = app;
