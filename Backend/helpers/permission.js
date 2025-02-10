import { user } from "./../Schema/userModal.js";
export const uploadProductPermission = async (userId) => {
  const User = await user.findById(userId);

  if (User.role === "ADMIN") {
    return true;
  }

  return false;
};
