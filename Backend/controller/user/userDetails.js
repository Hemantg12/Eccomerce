import { user } from "../../Schema/userModal.js";

export async function userDetailsController(req, res) {
  try {
    console.log(req.userId);
    const User = await user.findById(req.userId);

    console.log(User);
    res.status(200).json({
      success: true,
      error: false,
      data: User,
      message: "User-details",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
