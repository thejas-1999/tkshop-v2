import dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";

import products from "./data/products.js";
import users from "./data/users.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users); // Fixed variable name: `createdUser` → `createdUsers`
    const adminUser = createdUsers[0]._id; // Use `createdUsers`

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }; // Fixed key `adminUser` → `user` to match schema
    });

    await Product.insertMany(sampleProducts);

    console.log("Data imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log("Data destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
