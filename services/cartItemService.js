const UserModel = require("../models/UserModel");
const userService = require("../services/userService");
const cartItemModel = require("../models/cartItemModel");

const updatecartItem = async (userId, cartItemId, cartItemData) => {
  try {
    const item = await findCartItemById(cartItemId);

    console.log("item : " ,item)
    if (!item) {
      throw new Error("Cart Item NOt Found", cartItemId);
    }

    const user = await userService.findUserById(item.userId);
    if (!user) {
      throw new Error("User Not Found", userId);
    }

    if (user._id.toString() === item.userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      const updatedcartItem = await item.save();

      return updatedcartItem;
    } else {
      throw new Error("Cant update cart item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const removecartItem = async (userId, cartItemId) => {
  const cartItem = await findCartItemById(cartItemId);
  console.log(cartItem)
  if (!cartItem) {
    throw new Error("Cart Item NOt Found", cartItemId);
  }

  const user = await userService.findUserById(userId);
  if (!user) {
    throw new Error("User Not Found", userId);
  }
  if (user._id.toString() === cartItem.userId.toString()) {
    await cartItemModel.findByIdAndDelete(cartItemId);
  } else {
    throw new Error("Cant delete item");
  }
};

const findCartItemById = async (cartItemId) => {
  const cartItem = await cartItemModel.findById(cartItemId).populate("product");
  if (cartItem) return cartItem;
  else throw new Error("Cart Item Not Found");
};

module.exports = ({ updatecartItem, removecartItem, findCartItemById });
