const express = require('express');

const numberController = require('../controllers/numberController');

const router = express.Router();

//  / => GET 
router.get('/', numberController.getInstructions);

module.exports = router;
