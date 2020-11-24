const express = require("express");
const router = express.Router();

//middleware
const { authCheck } = require("../middleware/auth");
//import
const { createOrUpdateUser } = require("../controllers/auth");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);

module.exports = router;
