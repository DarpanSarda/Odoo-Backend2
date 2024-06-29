const express = require("express");
const router = express.Router();

const authenticate = require("../Middleware/Authenticate");

const productById = require("../Controller/User/Product/productbyid")
const getAllProducts = require("../Controller/User/Product/getAllproducts")

router.get("/",authenticate,getAllProducts);
router.get("/id/:id",authenticate,productById);

module.exports=router;