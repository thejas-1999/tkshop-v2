import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import products from "./data/products.js";

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send(`API is running...`);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Database is connected`);
    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
