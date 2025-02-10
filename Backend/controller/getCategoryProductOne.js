import { product } from "../Schema/productModel.js";

export const getCategoryProduct = async (req, res) => {
  try {
    const productCategory = await product.distinct("category");

    console.log("category", productCategory);

    //array to store one product from each category
    const productByCategory = [];

    for (const category of productCategory) {
      const Product = await product.findOne({ category });

      if (Product) {
        productByCategory.push(Product);
      }
    }

    res.json({
      message: "category product",
      data: productByCategory,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
