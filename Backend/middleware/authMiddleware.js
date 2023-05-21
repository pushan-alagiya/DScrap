import  jwt from "jsonwebtoken";
import User from "../models/UserModel.js";


const authMiddleware=async(req,res,next)=>{

    let token;
    if(req.headers.authorization.startsWith("Bearer")){
        token=req.headers.authorization.split(" ")[1];
        try {
            if(token){
                const verifyToken=jwt.verify(token,"myaccesssecretkey");
                const user=await User.findById(verifyToken.id);
                req.user=user;
                next();
            }
        } catch (error) {
            console.log(error);
        }
    }

}

const isAdmin=async(req,res,next)=>{
    const { email }=req.user;
    // console.log(req.user);
    const adminUser= await User.findOne({email});
    
    if(adminUser.role !== "admin"){
        res.send("you are not admin");
    }else{
        next();
    }
}

export {authMiddleware,isAdmin};