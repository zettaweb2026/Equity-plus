const express = require('express');
const routes = require('./routes');
const logger = require('./middlewares/logger');
const connectDatabase = require('./config/database');

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

const normalizeOrigin = (origin) => origin.replace(/\/+$/, '');

const getAllowedOrigins = () => {
  const configuredOrigins = [
    process.env.FRONTEND_URL,
    process.env.FRONTEND_URLS
  ]
    .filter(Boolean)
    .flatMap((value) => value.split(','))
    .map((value) => normalizeOrigin(value.trim()))
    .filter(Boolean);

  return new Set([
    'http://localhost:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5174',
    ...configuredOrigins
  ]);
};

const isAllowedOrigin = (origin) => {
  if (!origin) return true;

  const normalizedOrigin = normalizeOrigin(origin);
  const allowedOrigins = getAllowedOrigins();
  const shouldAllowVercelPreviews =
    process.env.ALLOW_VERCEL_PREVIEWS === 'true' ||
    (process.env.VERCEL === '1' && process.env.ALLOW_VERCEL_PREVIEWS !== 'false');

  if (allowedOrigins.has(normalizedOrigin)) return true;
  if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(normalizedOrigin)) return true;

  return shouldAllowVercelPreviews &&
    /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(normalizedOrigin);
};

// Enable CORS for frontend requests
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && isAllowedOrigin(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Vary', 'Origin');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use('/api/auth', async (req, res, next) => {
  if (!process.env.MONGODB_URI) {
    return res.status(503).json({
      success: false,
      message: 'Database is not configured.'
    });
  }

  try {
    await connectDatabase();
    next();
  } catch (error) {
    next(error);
  }
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

app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
