const CartModel = require('../models/CartModel');
const CartItemModel = require('../models/cartItemModel')
const ProductModel = require('../models/ProductModel');
const cartItemModel = require('../models/cartItemModel');

const createCart=async(user)=>{
    try {
        const cart = new CartModel({user});
        const createdCart=await cart.save();
        return createdCart;   
    } catch (error) {
        throw new Error(error.message);
    }
}

const findusercart=async(userid)=>{
    console.log(userid)
    try {
        let cart = await CartModel.findOne({user:userid});
        // console.log(cart)
        let cartitems = await CartItemModel.find({cart:cart._id}) //.populate("products");
        cart.cartItems=cartitems;

        let totalPrice=0;
        let totalDiscountedPrice=0;
        let totalItem=0;

        for(let cartItem of cart.cartItems)
        {
            totalPrice+=cartItem.price;
            totalDiscountedPrice+=cartItem.discountedPrice;
            totalItem+=cartItem.quantity;
        }

        cart.totalPrice=totalPrice;
        cart.totalItem=totalItem;
        cart.discount = totalPrice-totalDiscountedPrice;
        return cart;
    } catch (error) {
        throw new Error(error.message);
    }
}

const addCartItem = async(userId,req)=>{
    console.log("service",userId)
    try {
        const cart=await CartModel.findOne({user:userId});
        console.log(cart)
        const product = await ProductModel.findById(req.productId);
        console.log(product)
        console.log(userId)
        const isPresent = await cartItemModel.findOne({cart:cart._id,product:product._id,userId:userId})
        console.log("present",isPresent)
        if(!isPresent)
        {
            const cartItem = new cartItemModel({
                product:product._id,
                cart:cart._id,
                quantity:1,
                price:product.price,
                userId:userId,
            })

            const createdcartItem = await cartItem.save();
            cart.cartItems.push(createdcartItem);
            await cart.save();
            return createdcartItem;
        }
        return isPresent;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {createCart,findusercart,addCartItem};