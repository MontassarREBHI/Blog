/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client'

// src/components/Blog.js
import React, { useState, useEffect } from 'react';
import { fetchPost, createPost } from '../api.js';
import NewBlog from './NewBlog.js';
import BlogCard from './BlogCard.js';

const Blog = () => {
    const [posts, setPosts] = useState([
        {
            "title": "Exploring the Unseen: An Adventure into the Depths",
            "author": "Jane Doe",
            "content": "Have you ever wondered what lies beneath the surface of our planet? Join me on this extraordinary journey as we delve into the mysteries of the deep ocean, uncovering secrets and marvels that have remained hidden for centuries."
        },
        {
            "title": "The Art of Mindfulness: Finding Peace in a Hectic World",
            "author": "John Smith",
            "content": "In today's fast-paced society, finding a moment of peace can seem impossible. In this blog, we'll explore the art of mindfulness and learn techniques to cultivate inner tranquility amidst the chaos. Discover how mindfulness can transform your life and bring you lasting serenity."
        },
        {
            "title": "Tech Trends 2025: What's Next in the World of Innovation",
            "author": "Alex Johnson",
            "content": "As we enter a new year, the landscape of technology continues to evolve at a rapid pace. In this blog, we'll take a look at the top tech trends to watch in 2025, from advancements in artificial intelligence to breakthroughs in renewable energy. Stay ahead of the curve and discover what's next in the world of innovation."
        },
        {
            "title": "Culinary Adventures: Tasting the World from Your Kitchen",
            "author": "Emily Brown",
            "content": "Traveling the world through food is one of the most delightful experiences. In this blog, we'll embark on a culinary journey, exploring recipes and flavors from different cultures. Learn how to bring the tastes of distant lands right into your own kitchen."
        },
        {
            "title": "Fitness for Life: Achieving Your Health Goals",
            "author": "Michael Lee",
            "content": "Embarking on a fitness journey can be challenging, but with the right guidance and motivation, you can achieve your health goals. This blog will provide tips, workout routines, and nutritional advice to help you stay on track and live a healthier, more active life."
        }
    ]
    );
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    // useEffect(() => {
    //     const getPosts = async () => {
    //         const data = await fetchPost();
           
    //         setPosts(data.data);
    //     };
    //     getPosts();
    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, content, author };
        await createPost(newPost);
        const data = await fetchPost();
        setPosts(data);
    };

    return (
        <div className="container mx-auto px-4 font-sans">
            <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 mb-8 shadow-lg rounded-lg">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold">Welcome to the Blog</h1>
                        <p className="text-md">Discover the latest posts and insights</p>
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/login" className="hover:underline">Log In</a></li>
                            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <section className="mb-8">
                    <NewBlog />
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-12 text-center">Our Latest Posts</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <BlogCard key={post._id} post={post} />
                        ))}
                    </ul>
                </section>
            </main>
            <footer className="bg-gray-800 text-white p-4 mt-8 rounded-lg">
                <p className="text-center">&copy; 2023 Blog. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Blog;
