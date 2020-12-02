const express = require("express");
const router = express.Router();

//middleware
const { authCheck, adminCheck } = require("../middleware/auth");
//import
const { create } = require("../controllers/product");

router.post("/product", authCheck, adminCheck, create);

module.exports = router;