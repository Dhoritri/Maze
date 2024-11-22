//Route for login
import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        //check if user available
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({success:false, message: "User not found" });
        }
        //check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            res.json({success:true, token})
        }
        else{
            return res.json({success:false, message: "Invalid password" });
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
};

//Route for signup
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Email already exists" });
    }
    //is valid email format & password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Email not valid" });
    }
    if (password.length < 6) {
      return res.json({
        success: false,
        message: "Enter a pass length greater then 6 letters",
      });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message});
  }
};
//routee for addmin

const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };