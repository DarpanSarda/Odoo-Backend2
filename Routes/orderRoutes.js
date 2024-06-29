const express = require("express");
const router = express.Router();

const authenticate = require("../Middleware/Authenticate");

const createOrder = require("../Controller/User/Order/createOrder");
const findorderbyid = require("../Controller/User/Order/findorderbyid");
const orderhistory = require("../Controller/User/Order/orderhistory");

router.post("/",authenticate,createOrder);
router.get('/yourOrders',authenticate,orderhistory);
router.get('/:id',authenticate,findorderbyid);

module.exports=router;