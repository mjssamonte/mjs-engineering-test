const express = require('express');

const numberController = require('../controllers/numberController');

const router = express.Router();

// /api/input_number/ => POST
router.post('/input_number', numberController.apiPostInputNumber);

module.exports = router;