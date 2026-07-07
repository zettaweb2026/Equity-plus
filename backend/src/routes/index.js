const express = require('express');
const router = express.Router();
const marketController = require('../controllers/marketController');
const stockController = require('../controllers/stockController');
const authRoutes = require('./authRoutes');

router.use('/auth', authRoutes);
router.get('/market', marketController.getMarket);
router.get('/stocks/ticker', stockController.getTickerData);

module.exports = router;
