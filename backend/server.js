require('./src/config/env');

const app = require('./src/app');
const connectDatabase = require('./src/config/database');

const PORT = process.env.PORT || 4000;

if (require.main === module) {
  connectDatabase()
    .catch((error) => {
      console.error('Database connection failed:', error.message);
    })
    .finally(() => {
      app.listen(PORT, () => {
        console.log(`Backend running on http://localhost:${PORT}`);
      });
    });
}

module.exports = app;
