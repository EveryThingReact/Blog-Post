import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
 
  const onSubmit = (data) => {
    console.log(data);
    // Handle signup logic here
  };

  return (
    <>
     <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <Link to="/login" className="absolute top-40 right-20 bg-indigo-950 text-white px-4 py-4 rounded-md shadow-md hover:bg-indigo-800 transition duration-300">
          Login
        </Link>
      <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-950">Join Us Today!</h1>
      <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <button type="submit" className="w-full bg-indigo-950 text-white p-3 rounded-md shadow-md hover:bg-indigo-800 transition duration-300">
          Sign Up
        </button>
      </form>
    </div>
  </div>
    </>
   
  );
};

export default SignupForm;
