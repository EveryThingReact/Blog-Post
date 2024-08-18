import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulate fetching post data by ID
    const fetchPost = async () => {
      // Still to Replace with actual API call
      const mockPosts = [
        {
          id: 1,
          title: "Understanding the Basics of React and Tailwind CSS",
          description: `
            React is a popular JavaScript library for building user interfaces. It allows developers to create reusable components that manage their own state. Tailwind CSS is a utility-first CSS framework that helps speed up the development process. Combining React with Tailwind is a powerful way to build modern web applications efficiently.
            It allows developers to create reusable components that manage their own state. Tailwind CSS is a utility-first CSS framework that helps speed up the development process. Combining React with Tailwind is a powerful way to build modern web applications efficiently.
            It allows developers to create reusable components that manage their own state. Tailwind CSS is a utility-first CSS framework that helps speed up the development process. Combining React with Tailwind is a powerful way to build modern web applications efficiently.
          `,
          author: "Jane Doe",
          authorPhoto: "https://via.placeholder.com/40",
          date: "August 8, 2024",
          image: "https://via.placeholder.com/600x400"
        },
        {
          id: 2,
          title: "Getting Started with React",
          description: `
            React is a JavaScript library for building dynamic user interfaces. Learn the basics of React and how to start building your first application with components, state, and props.
            Learn the basics of React and how to start building your first application with components, state, and props.
            Learn the basics of React and how to start building your first application with components, state, and props.
          `,
          author: "John Smith",
          authorPhoto: "https://via.placeholder.com/40",
          date: "August 5, 2024",
          image: "https://via.placeholder.com/600x400"

        },
        {
          id: 3,
          title: "How to Use Tailwind CSS with React",
          description: `
            Tailwind CSS is a utility-first CSS framework that can be seamlessly integrated with React. Discover how to set up Tailwind in your React projects and start styling your components with ease.
            Discover how to set up Tailwind in your React projects and start styling your components with ease.
            Discover how to set up Tailwind in your React projects and start styling your components with ease.
            `,
          author: "Emily Johnson",
          authorPhoto: "https://via.placeholder.com/40",
          date: "August 1, 2024",
          image: "https://via.placeholder.com/600x400"

        },
      ];

      const foundPost = mockPosts.find((p) => p.id === parseInt(id, 10));
      setPost(foundPost || null);
    };

    fetchPost();
  }, [id]);

  if (post === null) {
    return <div>Loading...</div>;
  }

  return (
  <>
   <Navbar></Navbar>
    <div className="flex justify-center items-center  p-4">
      <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden max-w-1xl m-4 w-full p-10">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4" />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center mb-6">
          <img src={post.authorPhoto} alt={post.author} className="w-12 h-12 rounded-full mr-4" />
          <div className="text-sm text-gray-500">
            <span>By {post.author}</span> | <span>{post.date}</span>
          </div>
        </div>
        <div className="prose max-w-none">
          <p>{post.description}</p>
        </div>
        <Link to="/post/:id" className="text-blue-500 hover:underline">
          Back to Posts
        </Link>
      </div>
    </div>
    </>
  );
};

export default PostDetail;

