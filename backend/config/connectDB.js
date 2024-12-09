import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

export default connectDB;
