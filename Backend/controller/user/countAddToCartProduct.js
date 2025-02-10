import { cart } from "./../../Schema/cartProduct.js";

export async function countAddToCartProduct(req, res) {
  try {
    const Count = await cart.countDocuments({ userId: req.userId });
    res.status(200).json({
      data: {
        count: Count,
      },
      message: "total size of cart",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}
