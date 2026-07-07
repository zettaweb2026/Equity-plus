const { loginUser, verifyToken } = require('../services/authService');

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  const result = await loginUser(email, password);

  if (!result.success) {
    return res.status(401).json(result);
  }

  return res.status(200).json(result);
}

function me(req, res) {
  const token = req.headers.authorization?.split('Bearer ')[1];
  const payload = verifyToken(token);

  if (!payload) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  return res.status(200).json({ success: true, user: payload });
}

module.exports = {
  login,
  me,
};
