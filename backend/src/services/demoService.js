const demoModel = require('../models/demoModel');

const getGreeting = () => {
  return demoModel.greeting;
};

const saveData = (data) => {
  demoModel.lastSaved = data;
  return {
    received: data,
    savedAt: new Date().toISOString(),
  };
};

module.exports = {
  getGreeting,
  saveData,
};
