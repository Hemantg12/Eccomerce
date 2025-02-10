import { product } from "./../Schema/productModel.js";
export const getproductController = async (req, res) => {
  try {
    const allProduct = await product.find().sort({ createdAt: -1 });
    res.json({
      message: "All-product",
      success: true,
      error: false,
      data: allProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
