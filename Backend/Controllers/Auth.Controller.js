const userModel = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken")

function jwtKey(email,id){
  
    const jwtToken=jwt.sign({email,id},
        process.env.JWT_SECRET,{expiresIn:"24h"}
    )
    return jwtToken
}

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

    const jwtToken=jwtKey(newUser.email,newUser._id)
    res.status(200).json({
      message: "Sign up successfully",
      success: true,
      jwtToken,
      name:newUser.name,
      email:newUser.email
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

    const jwtToken=jwtKey(user.email,user._id)
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
