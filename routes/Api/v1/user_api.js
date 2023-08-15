const express = require('express');
const router = express.Router();
const v1Controller = require("../../../controller/Api/v1");

router.get("/", v1Controller.getUser);
router.post("/add", v1Controller.addUser);
router.put("/update/:userId", v1Controller.updateUser);
router.delete("/delete/:userId", v1Controller.deleteUser);
module.exports = router;