const express = require("express");
const router = express.Router();

const authenticate = require("../Middleware/Authenticate");

const createMultipleProduct = require("../Controller/User/Product/createMultipleProduct");
const createProduct = require("../Controller/User/Product/createProduct");
const deleteproduct = require("../Controller/User/Product/deleteProduct")
const updateproduct = require("../Controller/User/Product/updateProducts")


router.post("/",authenticate,createProduct);
router.post("/createmultipleproduct",authenticate,createMultipleProduct)
router.delete("/:id",authenticate,deleteproduct);
router.put("/:id",authenticate,updateproduct);

module.exports=router;