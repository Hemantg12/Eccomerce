import bcrypt from "bcryptjs";
import { user } from "../../Schema/userModal.js";
import jwt from "jsonwebtoken";

export async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;

    // Input Validation (optional)
    // Validate email format and password length

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    const User = await user.findOne({ email });
    if (!User) {
      throw new Error("User not found"); // More specific error message
    }

    const isPasswordCorrect = await bcrypt.compare(password, User.password);
    if (!isPasswordCorrect) {
      throw new Error("Incorrect password"); // More specific error message
    }

    const tokenData = {
      _id: User._id,
      email: User.email,
    };
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
    if (!JWT_SECRET_KEY) {
      throw new Error("JWT_SECRET_KEY environment variable is not set!");
    }

    const token = await jwt.sign(tokenData, JWT_SECRET_KEY, {
      expiresIn: 60 * 60 * 8,
    });

    const tokenOption = {
      httpOnly: true,
      // secure: true  // Set based on HTTPS usage
    };

    res.cookie("token", token, tokenOption).status(201).json({
      data: token,
      success: true,
      error: false,
      message: "Logged In successfully",
    });
  } catch (error) {
    console.error(error.message); // Log the error message without sensitive details
    res.status(500).json({
      success: false,
      error: true,
      message: "An error occurred during sign-in", // Generic error message
    });
  }
}
