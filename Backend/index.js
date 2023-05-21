import bodyParser from "body-parser";
import express from "express"
import dbconnect from "./config/dbconnect.js";
import dotenv from 'dotenv';

import authRouter from "./routes/authRoute.js"



dotenv.config();



const port=process.env.PORT ||4000;
dbconnect()

const app=express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

app.use('/uploads',express.static('uploads'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use("/api/user",authRouter);


app.listen(port,()=>{
    console.log(`server listening on ${port}`)
});



