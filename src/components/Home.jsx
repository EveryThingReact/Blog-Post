import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations
import bgImg from '../Images/pexels-picography-4458.jpg'
import Img1 from '../Images/Ellipse 2.svg'
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
     <Navbar></Navbar>
      {/* Main Content */}
      <main
        className="flex-1 flex flex-col items-center justify-center py-12 relative"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center p-8 max-w-3xl mx-auto bg-white bg-opacity-80 rounded-lg shadow-lg relative z-10">
          <motion.h2
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to My Blog!
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover insightful articles, tutorials, and updates on the latest trends in technology.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you’re a tech enthusiast, developer, or someone looking to learn more about modern web technologies, you’ll find something of interest here.
          </motion.p>
          <motion.a
            href="/signup"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Get Started
          </motion.a>
        </div>

        {/* Add Icons or Other Visual Elements */}
        <div className="flex justify-around items-center mt-12 space-x-8">
          <motion.div
            className="bg-white p-6 rounded-full shadow-md"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <img src={Img1} alt="Icon 1" className="h-16 w-16" />
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-full shadow-md"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.3, rotate: 30 }}
          >
            <img src={Img1} alt="Icon 2" className="h-16 w-16" />
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-full shadow-md"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <img src={Img1} alt="Icon 3" className="h-16 w-16" />
          </motion.div>
        </div>

        {/* Add a Footer Section */}
        <footer className="text-center mt-12 text-9xl relative z-10">
          <p className="text-xl">&copy; 2024 My Blog. All rights reserved.</p>
          <p className="text-lg">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
