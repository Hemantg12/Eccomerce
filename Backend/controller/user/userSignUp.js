import { user } from "./../../Schema/userModal.js";
import bcrypt from "bcryptjs";
//bcrypt ,userSignUpController,email,password,name,user,salt,bcrypt,genSaltSync10,hashPassword,hashSync,password,salt,
export async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const User = await user.findOne({ email });
    console.log("User", User);
    if (User) {
      throw new Error("Already user exits.");
    }

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    if (!name) {
      throw new Error("Please provide name");
    }
    //It creates a payload object with the data from the request body, assigning a default role (GENERAL) and replacing the plain text password with the hashed password.
    const payload = {
      ...req.body,
      role: "GENERAL",
      password: hashPassword,
    };
    //     Saving the User to the Database:

    // const userData = new userModel(payload): Initializes a new user instance with the payload.
    // const saveUser = await userData.save(): Saves the new user to the database.

    //userData,saveUser
    const userData = new user(payload);
    const saveUser = await userData.save();
    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error.message || error);
    res.status(500).json({
      success: false,
      error: true,
      message: "User not created successfully",
    });
  }
}
