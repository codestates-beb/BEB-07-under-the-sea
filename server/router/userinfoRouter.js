const express = require('express');
const { readUserByAddress } = require('../controller/userinfoController');
const router = express.Router();

router.get('/:address', readUserByAddress);

module.exports = router;