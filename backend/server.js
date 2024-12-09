import express from "express";
import products from "./data/products.js";
import connectDB from "./config/connectDB.js";

const app = express();
const port = process.env.PORT || 8000;

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
