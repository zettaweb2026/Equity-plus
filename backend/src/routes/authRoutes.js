const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/login', authController.login);
router.get('/me', authMiddleware(), authController.me);
router.get('/admin-dashboard', authMiddleware('admin'), (req, res) => {
  res.status(200).json({ success: true, message: 'Admin dashboard access granted', user: req.user });
});
router.get('/user-dashboard', authMiddleware('user'), (req, res) => {
  res.status(200).json({ success: true, message: 'User dashboard access granted', user: req.user });
});

module.exports = router;
