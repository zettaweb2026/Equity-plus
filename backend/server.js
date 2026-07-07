const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

async function startServer() {
  if (MONGO_URI) {
    try {
      await mongoose.connect(MONGO_URI);
      console.log('MongoDB connected');
    } catch (error) {
      console.error('MongoDB connection error:', error.message);
    }
  }

  const server = app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is already in use. Please stop the existing process and try again.`);
      process.exit(1);
    } else {
      console.error('Server startup error:', error.message);
      process.exit(1);
    }
  });
}

startServer();
