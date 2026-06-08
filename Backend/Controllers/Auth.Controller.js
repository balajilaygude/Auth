const userModel = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken")

async function SignUp(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(409).json({
        message: "User Already Exist you can Log in",
        success: false,
      });
    }
    hashpassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({ name, email, password: hashpassword });
    await newUser.save();

    res.status(200).json({
      message: "Sign up successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Internal server Error ${error.message}`,
      success: false,
    });
  }
}

async function Login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(403).json({
        message: "Auth Failed Something is wrong",
        success: false,
      });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(403).json({
        message: "Auth Failed Something is wrong",
        success: false,
      });
    }

    const jwtToken=jwt.sign({email:user.email,id:user._id},
        process.env.JWT_SECRET,{expiresIn:"24h"}
    )

    res.status(200).json({
      message: "Login successfully",
      success: true,
      jwtToken,
      name:user.name,
      email:user.email
    });
  } catch (error) {
    return res.status(500).json({
      message: `Internal server Error ${error.message}`,
      success: false,
    });
  }
}

module.exports = { SignUp,Login };
