import { uploadProductPermission } from "../helpers/permission.js";
import { product } from "../Schema/productModel.js";

export async function UploadProductController(req, res) {
  try {
    console.log("UploadProductController called");
    const sessionUserId = req.userId;

    // Ensure the permission check is awaited if it's an async function
    const hasPermission = await uploadProductPermission(sessionUserId);

    if (!hasPermission) {
      return res.status(403).json({
        message: "Permission denied",
        error: true,
        success: false,
      });
    }

    // Ensure body contains the necessary fields
    console.log(req.body);

    const uploadProduct = new product(req.body);
    const saveProduct = await uploadProduct.save();

    return res.status(201).json({
      message: "Product uploaded successfully",
      error: false,
      success: true,
      data: saveProduct,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message || "An error occurred",
      error: true,
      success: false,
    });
  }
}
