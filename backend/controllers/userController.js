import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

//@desc Authendicate the user and get token
//@route post api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

//@desc register the user
//@route post api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.send("Register");
});

//@desc logout the user
//@route post api/users/logout
//@access private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout");
});

//@desc get the user Profile
//@route get api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("profile");
});

//@desc update the user
//@route put api/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update profile");
});

//@desc get all users
//@route get api/users/
//@access private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get all users by admin");
});

//@desc delete user
//@route delete api/users/:id
//@access private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user by id");
});

//@desc get  user by id
//@route get api/users/:id
//@access private/admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get  user profile by admin");
});

//@desc update  user by id
//@route put api/users/:id
//@access private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user by admin");
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
