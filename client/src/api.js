import axios from "axios";
const API_URL='http://localhost:5000/api/posts'

export const fetchPost=async ()=>{
    try {
        const response= await axios.get(API_URL);
        return response.data
    }
    catch(error){
        console.error("error fecthing posts",error.message)
        throw error;
    }
}

export const createPost = async (data)=>{
    try {
        const newPost= await axios.post(API_URL,data)
    return newPost.data
    }
    catch(error){
        console.error("error posting a new blog", error.message)
        throw error;
    }
}

