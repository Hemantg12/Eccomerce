import { product } from "./../Schema/productModel.js";

export const searchProduct = async (req, res) => {
  try {
    const query = req.query.q;

    const regex = new RegExp(query, "i", "g");

    const Product = await product.find({
      $or: [
        {
          productName: regex,
        },
        {
          category: regex,
        },
      ],
    });

    res.json({
      data: Product,
      message: "Search Product list",
      error: false,
      success: true,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
