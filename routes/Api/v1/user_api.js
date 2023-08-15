const express = require('express');
const router = express.Router();
const v1Controller = require("../../../controller/Api/v1");

router.get("/", v1Controller.getUser);
module.exports = router;