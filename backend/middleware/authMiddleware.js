import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

//protected routes

const protect = asyncHandler(async (req, res, next) => {
  let token;

  //read the jwt from the token
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
    } catch (error) {
      res.status(401);
      throw new Error(`Token failed`);
    }
    next();
  } else {
    res.status(401);
    throw new Error(`Not authorized, No Token`);
  }
});

//Admin Route

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as Admin");
  }
};

export { protect, admin };
