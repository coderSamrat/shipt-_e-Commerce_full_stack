import { UserModel } from "../model/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const hass_Password = async (password) => {
      const salt = await bcrypt.genSalt(10);
      return await bcrypt.hash(password, salt);
}

const generateToken = (userId) => {
      try {
            const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET, {
                  expiresIn: "1h",
            });
            return token;
      } catch (error) {
            throw new Error("Failed to generate token", error.message);
      }
};

const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
};

export const signpController = asyncHandler(async (req, res) => {
      const users = await UserModel.find({});
      let id;
      if (users.length > 0) {
            let last_user_array = users.slice(-1);
            id = last_user_array[0].id + 1;
      } else {
            id = 1;
      }
      const { fullname, email, password } = req.body;

      if (!fullname) {
            return res.status(400)
                  .json({
                        success: false,
                        message: "Fullname is required",
                        error: true
                  });
      }

      if (!email) {
            return res.status(400)
                  .json({
                        success: false,
                        message: "Email is required",
                        error: true
                  });
      }

      if (email) {
            if (!validateEmail(email)) {
                  return res.status(400)
                        .json({
                              success: false,
                              message: "Invalid email format",
                              error: true
                        });
            }
      }

      if (!password) {
            return res.status(400)
                  .json({
                        success: false,
                        message: "Password is required",
                        error: true
                  });
      }

      if (password) {
            if (password.length < 8) {
                  return res.status(400)
                        .json({
                              success: false,
                              message: "Password must be at least 8 characters",
                              error: true
                        });
            }
      }

      let cart = {};
      for (let i = 0; i < 300; i++) {
            cart[i] = 0;

      }

      try {
            const existedUser = await UserModel.findOne({
                  email: email
            });
            if (existedUser) {
                  return res.status(400)
                        .json({
                              success: false,
                              message: "Email already exists",
                              error: true
                        });
            }

            const hassPassword = await hass_Password(password);

            const user = await UserModel.create({
                  id: id,
                  fullname: fullname,
                  email: email,
                  password: hassPassword,
                  cartData: cart
            });

            res.status(201)
                  .json({
                        success: true,
                        message: "User created successfully",
                        error: false,
                        data: user
                  });
      } catch (error) {
            return res.status(500)
                  .json({
                        success: false,
                        message: error.message,
                        error: true
                  });
      }

});

export const signinController = asyncHandler(async (req, res) => {
      const { email, password } = req.body;
      if (!email) {
            return res.status(400)
                  .json({
                        success: false,
                        message: "Email is required",
                        error: true
                  });
      }

      if (email) {
            if (!validateEmail(email)) {
                  return res.status(400)
                        .json({
                              success: false,
                              message: "Invalid email format",
                              error: true
                        });
            }
      }

      if (!password) {
            return res.status(400)
                  .json({
                        success: false,
                        message: "Password is required",
                        error: true
                  });
      }
      if (password) {
            if (password.length < 8) {
                  return res.status(400)
                        .json({
                              success: false,
                              message: "Password must be at least 8 characters",
                              error: true
                        });
            }
      }
      try {
            const user = await UserModel.findOne({
                  email: email
            });
            if (!user) {
                  return res.status(400)
                        .json({
                              success: false,
                              message: "User not found",
                              error: true
                        });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                  return res.status(400)
                        .json({
                              success: false,
                              message: "Invalid credentials",
                              error: true
                        });
            }
            const token = generateToken(user._id);
            console.log(token);

            const userWithoutPassword = await UserModel.findOne({ _id: user?._id }).select("-password");
            res.status(200)
                  .json({

                        success: true,
                        message: "User logged in successfully",
                        error: false,
                        data: {
                              user: userWithoutPassword,
                              token: token
                        },
                  });
      } catch (error) {
            return res.status(500)
                  .json({
                        success: false,
                        message: error.message,
                        error: true
                  });
      }
});

export const signoutController = asyncHandler(async (req, res) => {
      try {
            const userid = req.userId;
            console.log(userid);

            const user = await UserModel.findByIdAndUpdate(userid, {
                  $set: {
                        token: null
                  }
            });
            if (!user) {
                  return res.status(400)
                        .json({
                              success: false,
                              message: "User not found",
                              error: true
                        });
            }
            res.status(200)
                  .json({
                        success: true,
                        message: "User logged out successfully",
                        error: false
                  });
      } catch (error) {
            return res.status(500)
                  .json({
                        success: false,
                        message: error.message,
                        error: true
                  });
      }
});

export const getCartData = asyncHandler(async (req, res) => {
      try {
            const userId = req.userId;
            const user = await UserModel.findById(userId);
            if (!user) {
                  return res.status(400).json({
                        success: false,
                        message: "User not found",
                        error: true
                  });
            }
            res.status(200).json({
                  success: true,
                  message: "Cart data fetched successfully",
                  error: false,
                  data: user.cartData
            });
      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: error.message,
                  error: true
            });
      }
});

export const addToCartController = asyncHandler(async (req, res) => {
      try {
            const userId = req.userId;
            const { itemId } = req.body;

            if (!itemId) {
                  return res.status(400).json({
                        success: false,
                        message: "Item id is required",
                        error: true
                  });
            }

            const user = await UserModel.findById(userId);
            if (!user) {
                  return res.status(400).json({
                        success: false,
                        message: "User not found",
                        error: true
                  });
            }

            if (!user.cartData[itemId]) {
                  user.cartData[itemId] = 0;
            }

            user.cartData[itemId] += 1;

            const updatedUser = await UserModel.findByIdAndUpdate(
                  userId,
                  { cartData: user.cartData },
                  { new: true }
            );

            if (!updatedUser) {
                  return res.status(500).json({
                        success: false,
                        message: "Failed to update cart data",
                        error: true
                  });
            }

            return res.status(200).json({
                  success: true,
                  message: "Item added to cart successfully",
                  error: false,
                  data: updatedUser.cartData
            });

      } catch (error) {
            console.error(error);
            return res.status(500).json({
                  success: false,
                  message: error.message,
                  error: true
            });
      }
});

export const removeFromCartController = asyncHandler(async (req, res) => {
      try {
            const userId = req.userId;
            const { itemId } = req.body;

            const user = await UserModel.findById(userId);
            if (!user) {
                  return res.status(400).json({
                        success: false,
                        message: "User not found",
                        error: true,
                  });
            }

            if (!itemId) {
                  return res.status(400).json({
                        success: false,
                        message: "Item id is required",
                        error: true,
                  });
            }

            if (user.cartData[itemId] > 0) {
                  user.cartData[itemId] -= 1;
            }

            const updateCartData = await UserModel.findOneAndUpdate(
                  { _id: userId },
                  { cartData: user.cartData },
                  { new: true }
            );
            console.log(updateCartData.cartData);

            res.status(200).json({
                  success: true,
                  message: "Item removed from cart successfully",
                  error: false,
            });
      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: error.message,
                  error: true,
            });
      }
});

export const resetCartData = asyncHandler(async (req, res) => {
      try {
            const userId = req.userId;
            const user = await UserModel.findById(userId);
            if (!user) {
                  return res.status(400).json({
                        success: false,
                        message: "User not found",
                        error: true,
                  });
            }
            user.cartData = {};
            const updatedUser = await UserModel.findByIdAndUpdate(
                  userId,
                  { cartData: user.cartData },
                  { new: true }
            );
            return res.status(200).json({
                  success: true,
                  message: "Cart data reset successfully",
                  error: false,
                  data: updatedUser.cartData

            });
      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: error.message,
                  error: true,
            });
      }
});