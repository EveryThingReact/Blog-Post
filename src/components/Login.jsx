import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
  };

  return (
<>
  <Navbar></Navbar>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
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
            {...register("password", { required: "Password is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default LoginForm;
