import { user } from "./../../Schema/userModal.js";

export async function allUsers(req, res) {
  try {
    console.log("userid all Users", req.userId);

    const allUsers = await user.find();

    res.json({
      message: "All User ",
      data: allUsers,
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
}
