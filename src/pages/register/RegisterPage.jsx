import React, { useState } from "react";
import MainLayout from "../../components/ MainLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });
  const password = watch("password"); // keep track of the password
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto border border-[#c3cad9] rounded-md py-5 px-10">
          <h1 className="font-sans text-2xl font-bold text-center text-[#0D2436] mb-8">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5a7184] font-semibold block"
              >
                Name
              </label>
              <input
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "Name length must be at least 1 character",
                  },
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                type="text"
                id="name"
                placeholder="enter name"
                className={`placeholder:text-[#959ead]
           text-[#0D2436] mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${
             errors.name ? "border-red-500" : "border-[#c3cad9]"
           }`}
              />
              {errors.name?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                type="email"
                id="email"
                placeholder="your email"
                className={`placeholder:text-[#959ead]
           text-[#0D2436] mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${
             errors.email ? "border-red-500" : "border-[#c3cad9]"
           }`}
              />
              {errors.email?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password length must be at least 6 characters",
                  },
                })}
                type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                id="password"
                placeholder="enter password"
                className={`placeholder:text-[#959ead]
          text-[#0D2436] mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${
            errors.password ? "border-red-500" : "border-[#c3cad9]"
          }`}
              />
              {errors.password?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="confirmPassword"
                className="text-[#5a7184] font-semibold block"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is required",
                  },
                  validate: (value) => {
                    // validate with a call back function of value
                    if (value !== password) {
                      return "Password do not match";
                    }
                  },
                })}
                type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                id="confirmPassword"
                placeholder="enter confirm password"
                className={`placeholder:text-[#959ead]
           text-[#0D2436] mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${
             errors.confirmPassword ? "border-red-500" : "border-[#c3cad9]"
           }`}
              />
              {errors.confirmPassword?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword?.message}
                </p>
              )}
             
            </div>
             {/* Show/Hide Password Toggle */}
             <button
                type="button"
                className="absolute ml-44 rounded-lg px-3 py-2  pt-2 bg-[#61728d] text-white font-semibold text-sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-[#1565D8]"
            >
              Forgot password?
            </Link>
            <button
              type="submit"
              disabled={!isValid}
              className="bg-[#1565D8] text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 
              disabled:opacity-80 disabled:cursor-not-allowed "
            >
              Register
            </button>
            <p className="text-sm font-semibold text-[#5a7184] ">
              You have an account?
              <Link to="/login" className="text-[#1565D8]">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
