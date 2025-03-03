import { Product } from "../model/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Add product API
export const addProduct = asyncHandler(async (req, res) => {
      try {
            const products = await Product.find({});
            let id;
            if (products.length > 0) {
                  let last_product_array = products.slice(-1);
                  id = last_product_array[0].id + 1;
            } else {
                  id = 1;
            }
            const { name, image, category, new_price, old_price } = req.body;

            const product = new Product({
                  id,
                  name,
                  image,
                  category,
                  new_price,
                  old_price
            });
            await product.save();

            res.status(201)
                  .json({
                        success: true,
                        message: "Product added successfully",
                        data: product
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

// Remove Product from database API 
export const removeProduct = asyncHandler(async (req, res) => {
      try {
            const id = req.body.id;
            const product = await Product.findOneAndDelete({ id });
            if (!product) {
                  return res.status(404)
                        .json({
                              success: false,
                              message: "Product not found",
                              error: true
                        });
            }
            res.status(200)
                  .json({
                        success: true,
                        message: "Product removed successfully",
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

//Get the ALl Product 
export const getAllProducts = asyncHandler(async (req, res) => {
      try {
            const all_product = await Product.find();
            res.status(200)
                  .json({
                        success: true,
                        message: "All Product",
                        data: all_product
                  });
      } catch (error) {
            return res.status(500)
                  .json({
                        success: false,
                        message: "Something went wrong" || error.message,
                        error: true
                  });
      }
});

//Get New Collection Product 
export const getNewCollectionProduct = asyncHandler(async (req, res) => {
      try {
            const product = await Product.find();
            const new_collection_product = product.slice(0, 8); //give me only 8 products from the all products
            res.status(200)
                  .json({
                        success: true,
                        message: "New Collection Product",
                        data: new_collection_product
                  });
      } catch (error) {
            return res.status(500)
                  .json({
                        success: false,
                        message: "Something went wrong" || error.message,
                        error: true
                  });
      }
});

//Get the Propuler Product
export const getPropulerProduct = asyncHandler(async (req, res) => {
      try {
            const product = await Product.find({category: 'men'});
            const propuler_product = product.slice(0, 4); // give me only 4 products from the all products
            res.status(200)
                  .json({
                        success: true,
                        message: "Propuler Product",
                        data: propuler_product
                  });
      } catch (error) {
            return res.status(500)
                  .json({
                        success: false,
                        message: "Something went wrong" || error.message,
                        error: true
                  });
      }
});

// addto cart product 
