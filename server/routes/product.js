const express = require("express");
const router = express.Router();

//middleware
const { authCheck, adminCheck } = require("../middleware/auth");
//import
const { create, listAll } = require("../controllers/product");

router.post("/product", authCheck, adminCheck, create);
router.get("/products/:count", listAll);

module.exports = router;
