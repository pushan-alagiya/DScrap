import mongoose from "mongoose"


const dbconnect=()=>{
    try {
        const conn=mongoose.connect(process.env.DB_URL)
        console.log("DB connected...")
    } catch (error) {
       console.log(error) 
    }
}

export default dbconnect;