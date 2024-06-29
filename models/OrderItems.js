const mongoose = require('mongoose');

const OrderItemsSchema = mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }
});

const OrderItemsModel = mongoose.model('orderItems',OrderItemsSchema);
module.exports=OrderItemsModel;