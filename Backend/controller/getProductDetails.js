import { product } from "../Schema/productModel.js";

export const getProductDetails = async (req, res) => {
  try {
    const { productId } = req.body;

    const Product = await product.findById(productId);

    res.json({
      data: Product,
      message: "Ok",
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      error: true,
      success: false,
    });
  }
};
