import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import ordeRoutes from "./routes/orderRoutes.js";

const port = process.env.PORT || 5000;
connectDB();

const app = express();

//middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie parser
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", ordeRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
