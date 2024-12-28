'use client'

// src/components/Blog.js
import React, { useState, useEffect } from 'react';
import { fetchPost, createPost } from '../api.js';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchPost();
           
            setPosts(data.data);
        };
        getPosts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, content, author };
        await createPost(newPost);
        const data = await fetchPost();
        setPosts(data);
    };

    return (
        <div>
            <h1>Blog Posts</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                />
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                />
                <button type="submit">Add Post</button>
            </form>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p><strong>Author: </strong>{post.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;
