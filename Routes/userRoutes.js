const express=require('express')
const router=express.Router();
const getAllusers = require('../Controller/User/GetAllusersController')
const getUserProfile = require('../Controller/User/UserProfileController')

router.get('/profile',getUserProfile);
router.get('/allusers',getAllusers);

module.exports=router;