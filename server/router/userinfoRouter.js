const express = require('express');
const { readUserByAddress, createUser, updateProfileImg, updateBackgroundImg, updateUsername } = require('../controller/userinfoController');
const router = express.Router();

router.get('/:address', readUserByAddress);
router.post('/createuser', createUser);
router.put('/updateprofileimg', updateProfileImg);
router.put('/updatebackgroundimg', updateBackgroundImg);
router.put('/updateusername', updateUsername);

module.exports = router;