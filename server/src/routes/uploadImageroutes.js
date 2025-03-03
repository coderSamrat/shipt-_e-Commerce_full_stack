import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/uploadOnCloudinary.js";

const router = Router();

router.route('/upload-image').post(upload.single('image'), asyncHandler(async (req, res) => {
      if (!req.file) {
            return res.status(400).json({
                  success: false,
                  message: 'No file uploaded'
            });
      }
      const cloudinaryResponse = await uploadOnCloudinary(req?.file?.path);
      return res.status(200)
            .json({
                  success: true,
                  message: "Image uploaded successfully",
                  data: {
                        image_url: cloudinaryResponse?.secure_url
                  }
            });
}));

export default router;