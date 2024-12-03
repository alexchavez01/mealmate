import React from "react";
import { Link } from "react-router-dom";
import PickaxeWidget from "../backend/components/PickaxeWidget";
import { FiLogOut, FiCompass } from "react-icons/fi";
import { PiChefHatFill } from "react-icons/pi";

const Home = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 relative">

        {/* Decorative Glow */}
        {/* <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 via-pink-500 to-red-500 blur-lg opacity-75 -z-10"></div> */}

        {/* Welcome Text */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Welcome to <span className="text-red-600">MealMate</span>
          </h1>
          <PiChefHatFill className="text-red-600 text-4xl" /> {/* Chef Icon */}
        </div>

        <p className="text-center text-gray-600 mb-6">
          You have successfully logged in. Explore our features below!
        </p>

        {/* Pickaxe Widget */}
        <div className="mb-4">
          <PickaxeWidget />
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-indigo-700 shadow-lg transform hover:scale-105 transition duration-300"
          >
            <FiLogOut className="mr-2" /> Logout
          </Link>
          <Link
            to="/explore"
            className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-indigo-700 shadow-lg transform hover:scale-105 transition duration-300"
          >
            <FiCompass className="mr-2" /> Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
