import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful registration (replace with backend API response check)
    if (formData.username && formData.password && formData.email) {
      console.log("Registration successful:", formData);
      navigate("/home"); // Redirect to Home page
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-10">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src="/logo.png" // Replace this with your logo path
          alt="MealMate Logo"
          className="w-46 h-36 scale-110 hover:scale-125"
        />
      </div>

      {/* Welcome Text */}
      <h1 className="text-2xl font-bold text-center mb-2">Create an Account</h1>
      <p className="text-center text-gray-500 mb-6">Register to get started</p>

      {/* Register Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Register
        </button>
      </form>

      {/* Login Link */}
      <p className="mt-4 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <a href="/" className="text-blue-500 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default Register;
