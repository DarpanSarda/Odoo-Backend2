const express = require("express");
const router = express.Router();

const authenticate = require("../Middleware/Authenticate");

const updateitem = require("../Controller/User/Cart/CartItem/updateitem");
const removeritem = require("../Controller/User/Cart/CartItem/removeitem");

router.put("/cart_items/:id",authenticate,updateitem);
router.delete("/:id",authenticate,removeritem);

module.exports=router;