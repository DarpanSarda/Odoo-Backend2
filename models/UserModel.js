const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required:true,
    },
    lastName:{
        type: String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:'customer'
    },
    mobile:{
        type:String,
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    paymentInfo:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Payment_info"
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const UserModel=mongoose.model("users",userSchema);
module.exports = UserModel;