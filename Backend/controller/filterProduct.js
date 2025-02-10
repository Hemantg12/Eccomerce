import { product } from "../Schema/productModel.js";

export const filterProductController = async (req, res) => {
  try {
    const categoryList = req?.body?.category || [];
    console.log("categoryList", categoryList);
    const Product = await product.find({
      category: {
        $in: categoryList,
      },
    });

    res.json({
      data: Product,
      message: "product",
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
