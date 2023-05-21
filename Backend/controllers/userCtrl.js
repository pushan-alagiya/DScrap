import User from "../models/UserModel.js";
import  jwt  from "jsonwebtoken"

import bcrypt from 'bcrypt';
import generateToken from "../config/jwtToken.js";
import genraterefreshToken from "../config/refreshToken.js";


const registerUser=async(req,res)=>{
    const email=req.body.email;
    const findUser=await User.findOne({email});
    

    if(!findUser){
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const newUser=new User({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword,
        })
        try {
            const savedUser=await newUser.save()
            res.status(201).json(savedUser)
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.json({
            msg:"User Already Exists",
            success:false,
        })
    }

}

const logedinUser=async(req,res)=>{
    const {email,password}=req.body;

    try {
        const findUser=await User.findOne({email});
        
        if (findUser) {
            const ismatch=await bcrypt.compare(req.body.password,findUser.password);
            if(ismatch){
                const refreshToken= genraterefreshToken(findUser._id);

                const updateUser=await User.findByIdAndUpdate(findUser._id,{refreshToken:refreshToken,},{new:true});

                res.cookie("refreshToken",refreshToken,{
                    httpOnly:true,
                    expires:new Date(Date.now()+25892000000)
                });
               

                res.json({
                        _id: findUser?._id,
                        name:findUser?.name,
                        email: findUser?.email,
                        token: generateToken(findUser?._id),
                    });
                    
            }
        }else{
            res.status(401).json("Wrong credentials")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const handleRefreshToken=async(req,res)=>{

    const cookie=req.cookies;

    // console.log(cookie)
      
    if(!cookie.refreshToken){
        res.send("No Refresh Token In Cookie")
    }
    const refreshToken=cookie.refreshToken;
    const user=await User.findOne({refreshToken});
    if(!user){
        res.send("NO user found using refresh Token");
    }
    else{
        jwt.verify(refreshToken,"myaccesssecretkey",(err,decoded)=>{
            if(err || user.id !== decoded.id){
                res.send("Not verify")
            }
            const accessToken=generateToken(user._id)
            res.json({accessToken});
        })
    }

}

const logout=async(req,res)=>{
    const cookie=req.cookies;
      
    if(!cookie.refreshToken){
        res.send("No Refresh Token In Cookie")
    }
    const refreshToken=cookie.refreshToken;
    const user=await User.findOne({refreshToken});

    if(!user){
        res.clearCookie("refreshToken",{
            httpOnly:true,
            secure:true,
        })
        return res.sendStatus(204);
    }
    await User.findOneAndUpdate(refreshToken,{
        refreshToken:""
    });

    res.clearCookie("refreshToken",{
            httpOnly:true,
            secure:true,
        })
    
     res.sendStatus(204);
    

}

const getAllUsers=async(req,res)=>{
    try {
        const users=await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json(error)
    }
}

const getUser=async(req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateUser=async(req,res)=>{
    if(req.body.password){
        const salt = await bcrypt.genSalt(12);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteUser=async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted..")
    } catch (error) {
        res.status(500).json(error)
    }
}
export  {registerUser,logedinUser,getAllUsers,getUser,deleteUser,updateUser,handleRefreshToken,logout}
