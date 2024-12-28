import Post from "../models/Post.js";


// Create a new post 
export const createPost = async (req,res)=>{
    const {title,content,author}=req.body

    try{
        const newPost= new Post({title,content,author})
        await newPost.save()
        res.status(201).json({message:"post created successfully!", data:newPost})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

export const getAllPosts = async (req,res)=>{
    try {
        const allPosts= await Post.find()
        res.status(200).json({message:"All posts retrieved successfully!",data:allPosts})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}