const { SignUp, Login } = require("../Controllers/Auth.Controller")
const { signupValidation, loginValidation } = require("../Middelewares/AuthValidation")

const router=require("express").Router()

router.post("/signup",signupValidation,SignUp)
router.post("/login",loginValidation,Login)


module.exports=router