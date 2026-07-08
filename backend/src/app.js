const express = require('express');
const routes = require('./routes');
const logger = require('./middlewares/logger');

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

// Enable CORS for frontend requests
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && origin.startsWith('http://localhost:')) {
    res.header('Access-Control-Allow-Origin', origin);
  } else {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  }
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(logger);
app.use('/api', routes);
app.use("/api/auth", authRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the backend API!');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});



module.exports = app;
