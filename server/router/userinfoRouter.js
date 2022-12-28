const express = require('express');
const { readUserByAddress, createUser } = require('../controller/userinfoController');
const router = express.Router();

router.get('/:address', readUserByAddress);
router.post('/createuser', createUser);

module.exports = router;