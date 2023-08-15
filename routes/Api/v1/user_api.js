const express = require('express');
const router = express.Router();
const userController = require('../../../controller/Api/v1/user_api')
router.get('/',userController.getUser);
module.exports = router;