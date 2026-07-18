import React from "react";
import {
  FaArrowLeft,
  FaUser,
  FaAt,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

const SignupForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-6">

        {/* Back Button */}
        <button className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
          <FaArrowLeft />
        </button>

        {/* Heading */}
        <h1 className="text-4xl font-bold mt-6">
          Create Account
        </h1>

        <p className="text-gray-500 mt-2">
          Start your learning journey with us
        </p>

        {/* Username */}
        <div className="mt-6">
          <label className="font-semibold">Username</label>

          <div className="flex items-center border rounded-xl px-4 py-3 mt-2">
            <FaAt className="text-gray-400" />
            <input
              type="text"
              placeholder="johndoe"
              className="ml-3 outline-none w-full"
            />
          </div>
        </div>

        {/* Name */}
        <div className="mt-5">
          <label className="font-semibold">Name</label>

          <div className="flex items-center border rounded-xl px-4 py-3 mt-2">
            <FaUser className="text-gray-400" />
            <input
              type="text"
              placeholder="John Doe"
              className="ml-3 outline-none w-full"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-5">
          <label className="font-semibold">Email address</label>

          <div className="flex items-center border rounded-xl px-4 py-3 mt-2">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              placeholder="e.g. john@example.com"
              className="ml-3 outline-none w-full"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-5">
          <label className="font-semibold">Password</label>

          <div className="flex items-center border rounded-xl px-4 py-3 mt-2">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              placeholder="********"
              className="ml-3 outline-none w-full"
            />
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-red-600 hover:bg-red-800 text-white text-xl font-semibold py-3 rounded-xl mt-8">
          Sign up
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          By clicking "Sign up", you agree to our
          <span className="font-bold text-black">
            {" "}Terms & Conditions
          </span>
          {" "}and{" "}
          <span className="font-bold text-black">
            Privacy Policy
          </span>
        </p>

      </div>
    </div>
  );
};

export default SignupForm;