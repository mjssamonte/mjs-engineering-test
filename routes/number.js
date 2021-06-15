const express = require('express');

const numberController = require('../controllers/numberController');

const router = express.Router();

//  /number/input => GET
router.get('/input', numberController.getInputNumber);

// /number/input => POST
router.post('/input', numberController.postInputNumber);

module.exports = router;
