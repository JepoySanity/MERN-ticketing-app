const asyncHandler = require("express-async-handler");
// @desc    Register new user
// @route   /api/users
// @access  Public
const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("fields are required");
  }
  res.send("registration route");
});
// @desc    Login a user
// @route   /api/users/login
// @access  Public
const userLogin = asyncHandler(async (req, res) => {
  res.send("login route");
});

module.exports = {
  userRegister,
  userLogin,
};
