import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';

cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
      try {
            if (!localFilePath) return null;

            const response = await cloudinary.uploader.upload(localFilePath, {
                  resource_type: "auto",
                  public_id: `my-uploaded-image-${Date.now()}`,
            });

            fs.unlinkSync(localFilePath);
            return response;

      } catch (error) {
            fs.unlinkSync(localFilePath);
            console.error("File upload failed:", error);
            throw new Error(`Upload failed: ${error.message}`);;
      }
};

export { uploadOnCloudinary };
