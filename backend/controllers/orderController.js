import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//@desc create new orders
//@route post /api/orders
//@access private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("Create a new order");
});

//@desc get logged in users orders
//@route get /api/orders/myorders
//@access private
const getMyOrder = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

//@desc get order by id
//@route get /api/orders/:id
//@access private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

//@desc create new orders
//@route put /api/orders/:id/pay
//@access private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("Update the order when paid");
});

//@desc create new orders
//@route put /api/orders/:id/deliver
//@access private/admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update the order when delivered");
});

//@desc create new orders
//@route get /api/orders
//@access private/admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all the orders");
});

export {
  addOrderItems,
  getMyOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
