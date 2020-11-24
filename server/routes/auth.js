const express = require("express");
const router = express.Router();

//import
const { createOrUpdateUser } = require("../controllers/auth");

router.get("/user", createOrUpdateUser);

module.exports = router;
