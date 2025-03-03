// write a middleware for verify token

import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
      try {
            const token = req.headers.authorization.split(" ")[1];
            if (!token) {
                  return res.status(401).json({
                        success: false,
                        message: "Token is required"
                  });
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (!decoded) {
                  return res.status(401).json({
                        success: false,
                        message: "Invalid token"

                  });
            }
            // console.log("Decoded userId:", decoded.id);
            // console.log("Decoded userId:", decoded._id); // why that is provide in undefined fixed that
            req.userId = decoded._id;
            // req.user = decoded.user;
            next();
      } catch (error) {
            return res.status(401).json({
                  success: false,
                  message: "Unauthorized",
                  error: true
            });
      }
}