const AddressModel = require("../models/AddressModel.js");
const OrderModel = require("../models/OrderModel.js");
const cartService = require("./cartService.js");
const OrderItemsModel = require("../models/OrderItems.js");

const createOrder = async (user, shipAddress) => {
  let address;

  if (shipAddress._id) {
    let existAddress = await AddressModel.findById(shipAddress._id);
    address = existAddress;
  } else {
    address = new AddressModel(shipAddress);
    address.user = user;
    await address.save();

    user.address.push(address);
    await user.save();
  }

  console.log(address)
  const cart = await cartService.findusercart(user._id);
  const orderItems = [];

  for (const item of cart.cartItems) {
    const orderItem = new OrderItemsModel({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });

    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }
  console.log(orderItems._id)

  const createdOrder = new OrderModel({
    user,
    orderItems:orderItems._id,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discount: cart.discount,
    totalItem: cart.totalItem,
    shipAddress: address,
  });
  // console.log(createdOrder)
  const savedOrder = await createdOrder.save();
  return savedOrder;
};

const placeOrder = async (orderId) => {
  const order = await findOrderById(orderId);

  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";

  return await order.save();
};

const confirmedOrder = async (orderId) => {
  const order = await findOrderById(orderId);

  order.orderStatus = "CONFIRM";
  return await order.save();
};

const shipedOrder = async (orderId) => {
  const order = await findOrderById(orderId);

  order.orderStatus = "SHIPPED";
  return await order.save();
};

const deliveredOrder = async (orderId) => {
  const order = await findOrderById(orderId);

  order.orderStatus = "DELIVERED";
  return await order.save();
};

const cancelledOrder = async (orderId) => {
  const order = await findOrderById(orderId);

  order.orderStatus = "CANCELED";
  return await order.save();
};

const findOrderById = async (orderId) => {
  const order = await OrderModel.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");

  return order;
};

const usersOrderHistory = async (userId) => {
  try {
    const orders = await OrderModel.find({
      user: userId,
      orderStatus: "PLACED",
    })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllOrders = async () => {
  const orders = await OrderModel.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
  return orders;
};

const deleteOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  await OrderModel.findByIdAndDelete(order._id);
};

module.exports = {
  createOrder,
  placeOrder,
  confirmedOrder,
  deliveredOrder,
  shipedOrder,
  cancelledOrder,
  findOrderById,
  getAllOrders,
  deleteOrder,
  usersOrderHistory,
};