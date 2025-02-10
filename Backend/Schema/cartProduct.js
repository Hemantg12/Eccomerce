//productId,quantity,userId
import mongoose from "mongoose";

const addtoCart = new mongoose.Schema(
  {
    productId: {
      ref: "product",
      type: String,
    },
    quantity: {
      type: Number,
    },
    userId: String,
  },
  {
    timestamps: true,
  }
);

export const cart = mongoose.model("cart", addtoCart);
