const express = require("express");
const router = express.Router();

const getAllOrders = require("../Controller/Admin/Orders/getAllOrderController");
const confirmedOrder = require("../Controller/Admin/Orders/ConfirmOrder");
const shippedOrders = require("../Controller/Admin/Orders/ShippedOrder");
const deliveredOrders = require("../Controller/Admin/Orders/deliverOrder");
const cancelOrders = require("../Controller/Admin/Orders/cancelOrder");
const deleteOrders = require("../Controller/Admin/Orders/deleteOrder");


const authenticate = require("../Middleware/Authenticate");

router.get("/",authenticate,getAllOrders);
router.put("/:orderId/confirmed",authenticate,confirmedOrder);
router.put("/:orderId/shipped",authenticate,shippedOrders);
router.put("/:orderId/delivered",authenticate,deliveredOrders);
router.put("/:orderId/delete",authenticate,deleteOrders);
router.put("/:orderId/cancel",authenticate,cancelOrders);

module.exports = router;