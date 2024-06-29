const express = require("express");
const router = express.Router();

const authenticate = require("../Middleware/Authenticate");

const addItem = require('../Controller/User/Cart/addItemCart')
const cart = require('../Controller/User/Cart/Findusercart');

router.get("/",authenticate,cart);
router.put("/add",authenticate,addItem);

module.exports=router;