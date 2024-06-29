const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    firstName:{
        type: String,
        required:true,
    },
    lastName:{
        type: String,
        required:true,
    },
    streetAddress:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    pincode:{
        type:Number,
        required:true,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"users"
    },
    mobile:{
        type:String,
        require:true
    },
})
const AddressModel = mongoose.model('addresses',AddressSchema);
module.exports=AddressModel;