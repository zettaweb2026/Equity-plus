const express = require('express');
const routes = require('./routes');
const logger = require('./middlewares/logger');

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

// Enable CORS for frontend requests
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173';
  
  if (origin === allowedOrigin || (origin && origin.startsWith('http://localhost:'))) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
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
