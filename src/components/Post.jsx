import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
const Post = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching post data by ID
    const fetchPost = async () => {
      // Replace with actual API call
      const mockPosts = [
        {
          id: 1,
          title: "Understanding the Basics of React and Tailwind CSS",
          summary: `
            React is a popular JavaScript library for building user interfaces. `,
          author: "Jane Doe",
          authorPhoto: "https://via.placeholder.com/40",
          date: "August 8, 2024",
          image: "https://via.placeholder.com/600x400"
        },
        {
          id: 2,
          title: "Getting Started with React",
          summary: `
            React is a JavaScript library for building dynamic user interfaces.`,
          author: "John Smith",
          authorPhoto: "https://via.placeholder.com/40",
          date: "August 5, 2024",
          image: "https://via.placeholder.com/600x400"
        },
        {
          id: 3,
          title: "How to Use Tailwind CSS with React",
          summary: `
            Tailwind CSS is a utility-first CSS framework that can be seamlessly integrated with React.  `,
          author: "Emily Johnson",
          authorPhoto: "https://via.placeholder.com/40",
          date: "August 1, 2024",
          image: "https://via.placeholder.com/600x400"
        },
      ];
      setPosts(mockPosts);
    };

    fetchPost();
  }, [id]);

  if (posts.length === 0 ) {
    return <div>Loading...</div>;
  }
  return (
    <>
   <Navbar></Navbar>
    <div className="flex justify-between items-center p-24">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm w-full m-4 p-6">
           <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4" />
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center mb-4">
            <img src={post.authorPhoto} alt={post.author} className="w-10 h-10 rounded-full mr-2" />
            <div className="text-sm text-gray-500">
              <span>By {post.author}</span> | <span>{post.date}</span>
            </div>
          </div>
          <div className="prose max-w-none mb-4">
            <p>{post.summary}...</p>
          </div>
          <Link to={`/postdetails/${post.id}`} className="text-blue-500 hover:underline">
            View More
          </Link>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default Post;
