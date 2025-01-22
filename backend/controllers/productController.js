import Product from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

//@desc get all products
//@route /api/products
//@access public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = process.env.PAGINATION_LIMIT;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: "i" } }
    : {};

  const count = await Product.countDocuments({ ...keyword });

  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

//@desc get aproduct
//@route /api/products/:id
//@access publice
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

//@desc create a  product
//@route post /api/products
//@access private/admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample Product",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "sample brand",
    category: "sample category",
    countInStock: 0,
    numReviews: 0,
    description: "sample description",
  });
  const createProduct = await product.save();
  res.status(200).json(createProduct);
});

//@desc update product
//@route put /api/products/:id
//@access public
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, image, brand, category, countInStock, description } =
    req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    product.description = description;

    const updateProduct = await product.save();
    res.json(updateProduct);
  } else {
    res.status(404);
    throw new Error("Resource is not found");
  }
});

//@desc delete product
//@route delete /api/products/:id
//@access private/admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: "Deleted Successfully" });
  } else {
    res.status(404);
    throw new Error("Resource is not found");
  }
});

//@desc create a new review
//@route post /api/products/:id/reviews
//@access private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already Reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, review) => acc + review.rating, 0) /
      product.reviews.length;
    await product.save();
    res.status(200).json({ message: "Review Added" });
  } else {
    res.status(404);
    throw new Error("Resource is not found");
  }
});

//@desc get top-rated products
//@route /api/products/top
//@access public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}) // Fetch all products
    .sort({ rating: -1 }) // Sort by rating in descending order
    .limit(3); // Limit to the top 3 products

  res.json(products);
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
};
