const mongoose = require("mongoose");

let connectionPromise = null;

const connectDatabase = async () => {
  if (!process.env.MONGODB_URI) {
    console.warn("MONGODB_URI is not set. Auth/database routes will not work until it is configured.");
    return null;
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(process.env.MONGODB_URI);
  }

  await connectionPromise;
  return mongoose.connection;
};

module.exports = connectDatabase;
