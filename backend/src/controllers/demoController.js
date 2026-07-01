const demoService = require('../services/demoService');

const getHello = (req, res) => {
  const message = demoService.getGreeting();
  res.json({ message });
};

const postEcho = (req, res) => {
  const data = req.body;
  const saved = demoService.saveData(data);
  res.status(201).json({ saved });
};

module.exports = {
  getHello,
  postEcho,
};
