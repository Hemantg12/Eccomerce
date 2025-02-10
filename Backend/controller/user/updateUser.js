import { user } from "./../../Schema/userModal.js";

export async function updateUser(req, res) {
  try {
    const sessionUser = req.userId;

    const { userId, email, name, role } = req.body;

    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    };

    const User = await user.findById(sessionUser);

    console.log("user.role", User.role);

    const updateUser = await user.findByIdAndUpdate(userId, payload);

    res.json({
      data: updateUser,
      message: "User Updated",
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
