import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc Get all products
//@url /api/products
//@access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc get a product
//@url /api/products/:id
//@access public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    statusCode(404);
    throw new Error(`Resource is not found`);
  }
});

export { getProducts, getProductById };
