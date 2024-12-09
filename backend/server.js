import express from "express";

import connectDB from "./config/connectDB.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = process.env.PORT || 8000;

app.use("/api/products", productRoutes);

const startServer = () => {
  try {
    connectDB();
    console.log(`Database is connected`);

    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
