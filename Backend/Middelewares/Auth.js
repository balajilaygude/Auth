const jwt=require("jsonwebtoken")

function Auth(req,res,next){
    const auth=req.headers.authorization;
    if(!auth){
        return res.status(403).json({
            message:"Unuthorized JWT Token Required",
        })
    }
    try {
        const decoded =jwt.verify(auth,process.env.JWT_SECRET)
        req.user=decoded;
        next();
    } catch (error) {
        return res.status(403).json({
            message:"Unuthorized JWT Token wong or Expired",
        })
    }
}

module.exports={Auth}