import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
       await  mongoose.connect("mongodb+srv://montassarrebhi1:Munaliza007@ss.3pljphu.mongodb.net/?retryWrites=true&w=majority&appName=SS")
       console.log("database connected successfully!")

    }
    catch (error) {
        console.error("error connecting to the database", error)
    }

}
 export default connectDB;