const express=require('express')
const router=express.Router();
const LoginController=require("../Controller/Auth/LoginController.js")
const RegisterController=require("../Controller/Auth/RegisterController.js")

router.post("/register",RegisterController);
router.post("/login",LoginController);
module.exports=router;