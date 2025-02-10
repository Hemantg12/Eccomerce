import { getproductController } from "../controller/getproductController.js"; // Note the curly braces around the import

import express from "express";

import { countAddToCartProduct } from "../controller/user/countAddToCartProduct.js";
import { userDetailsController } from "../controller/user/userDetails.js";
import { userSignUpController } from "../controller/user/userSignUp.js";
import { userSignInController } from "../controller/user/userSignIn.js";
import { getCategoryWiseProduct } from "../controller/getCategoryWiseProduct.js";
import { addToCartController } from "./../controller/user/addToCartController.js";
import { authToken } from "../middleware/authToken.js";
import { userLogout } from "../controller/user/userLogout.js";
import { allUsers } from "../controller/user/allUsers.js";
import { updateUser } from "../controller/user/updateUser.js";
import { UploadProductController } from "../controller/uploadProduct.js";
import { updateProductController } from "../controller/updateProduct.js";
import { filterProductController } from "../controller/filterProduct.js";
import { getCategoryProduct } from "../controller/getCategoryProductOne.js";
import { getProductDetails } from "../controller/getProductDetails.js";
import { searchProduct } from "../controller/searchProduct.js";
import { addToCartViewProduct } from "../controller/addToCartViewProduct.js";
import { updateAddToCartProduct } from "../controller/updateAddToCartProduct.js";
import { deleteAddToCartProduct } from "../controller/deleteAddToCartProduct.js";

const router = express.Router();
router.get("/userLogout", userLogout);
router.get("/all-user", authToken, allUsers);
router.get("/get-product", getproductController);
router.get("/user-details", authToken, userDetailsController);
router.get("/countAddToCartProduct", authToken, countAddToCartProduct);
router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.post("/category-product", getCategoryWiseProduct);
router.post("/addtocart", authToken, addToCartController);
router.post("/update-user", authToken, updateUser);
router.post("/upload-product", authToken, UploadProductController);
router.post("/update-product", authToken, updateProductController);
router.post("/filter-product", filterProductController);
router.get("/get-categoryProduct", getCategoryProduct);
router.get("/view-card-product", authToken, addToCartViewProduct);
router.post("/update-cart-product", authToken, updateAddToCartProduct);
router.post("/product-details", getProductDetails);
router.get("/search", searchProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);
export default router;
