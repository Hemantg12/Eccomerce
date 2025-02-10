import { product } from "../Schema/productModel.js";

export const getCategoryWiseProduct = async (req, res) => {
  //category,product
  try {
    const { category } = req?.body || req?.query;
    const Product = await product.find({ category });
    res.status(200).json({
      data: Product,
      message: "product found",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      success: false,
      message: "category error" || err,
    });
  }
};
