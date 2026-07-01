const express = require('express');
const router = express.Router();
const demoController = require('../controllers/demoController');

router.get('/hello', demoController.getHello);
router.post('/echo', demoController.postEcho);

module.exports = router;
