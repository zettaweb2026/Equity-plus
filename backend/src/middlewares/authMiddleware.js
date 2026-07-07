const { verifyToken } = require('../services/authService');

function authMiddleware(requiredRole) {
  return (req, res, next) => {
    const token = req.headers.authorization?.split('Bearer ')[1];
    const payload = verifyToken(token);

    if (!payload) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    if (requiredRole && payload.role !== requiredRole) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }

    req.user = payload;
    next();
  };
}

module.exports = authMiddleware;
