import express, { json } from "express";
import connectDB from "./db.js";
import postRouter from "./routes/Posts.js";
import cors from "cors" 
const app=express()
const PORT=5000

// connnecting the database
connectDB()

// parsing the json request 
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000' 
}));
// Using the Posts router 
app.use('/api/posts',postRouter)

app.listen(PORT,
    ()=> {
        console.log(`server listening on Port ${PORT}`)                             
    }
)

