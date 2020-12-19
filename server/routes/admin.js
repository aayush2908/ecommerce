const express = require("express");
const router = express.Router();

//middleware
const { authCheck, adminCheck } = require("../middleware/auth");
const { orders, orderStatus } = require("../controllers/admin");

router.get("/admin/orders", authCheck, adminCheck, orders);
router.put("/admin/order-status", authCheck.length, adminCheck, orderStatus);

module.exports = router;
