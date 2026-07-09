const express = require('express');
const router = express.Router();
const demoController = require('../controllers/demoController');
const marketController = require('../controllers/marketController');
const stockController = require('../controllers/stockController');

router.get('/hello', demoController.getHello);
router.post('/echo', demoController.postEcho);
router.get('/market', marketController.getMarket);
router.get('/stocks/ticker', stockController.getTickerData);

module.exports = router;
