import express from "express"

import { getAllPosts, createPost } from "../controllers/Posts.js"

const postRouter = express.Router()

postRouter.route('/').get(getAllPosts).post(createPost)

export default postRouter